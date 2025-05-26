<template>
  <div class="app-container">
    <main class="app-main">
      <!-- Tab 栏 -->
      <TabBar :currentTab="currentTab" @tabChange="handleTabChange" />

      <!-- 筛选器组件 -->
      <FilterComponent ref="filterComponent" :posts="posts" />

      <!-- 内容区域根据当前标签页显示不同组件 -->
      <div v-if="currentTab === 'home'">
        <PostArea :currentUser="currentUser" :newPost="post" :showUpload="showUpload" @publishPost="publishPost"
          @handleImageUpload="handlePostImageUpload" @showImageUpload="handleshowImageUpload" />
        <FeedList :posts="posts" :filteredPosts="filteredPosts" :currentUser="currentUser" @editPost="editPost"
          @deletePost="deletePost" @toggleForgiven="toggleForgiven" @toggleComments="toggleComments"
          @addComment="addComment" />
      </div>

      <!-- 统计分析区域 -->
      <div v-else class="stats-area">
        <StatsComponent :posts="posts" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import TabBar from './TabBar.vue'
import PostArea from './PostArea.vue'
import FeedList from './FeedList.vue'
import StatsComponent from './StatsComponent.vue'
import FilterComponent from './FilterComponent.vue';
import { RoleImg } from '../../assets/yierbubu/index'
import { ref as fireRef, onValue, set, remove } from 'firebase/database';
import db from '../../services/firebase';

const currentTab = ref('home');
const currentUser = ref({
  id: 3,
  name: '访客',
  avatar: RoleImg[2]
});

const users = [
  { id: 1, name: '一二', avatar: RoleImg[0] },
  { id: 2, name: '布布', avatar: RoleImg[1] },
];

const posts = ref([]);
const post = ref({
  content: '',
  images: [],
  originalId: null // 用于标识编辑的原始动态ID
});

const showUpload = ref(false);
const filterComponent = ref(null);

const filteredPosts = computed(() => {
  let result = posts.value;

  if (filterComponent.value?.selectedIdentity) {
    result = result.filter(post => post.user.name === filterComponent.value.selectedIdentity);
  }

  if (filterComponent.value?.selectedDate) {
    const selected = new Date(filterComponent.value.selectedDate);
    result = result.filter(post => {
      const postDate = new Date(post.timestamp);
      return (
        postDate.getFullYear() === selected.getFullYear() &&
        postDate.getMonth() === selected.getMonth() &&
        postDate.getDate() === selected.getDate()
      );
    });
  }

  return result;
});

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Shanghai");

const formatDate = (dateStr) => {
  return dayjs.tz(dateStr, "Asia/Shanghai").format('YYYY年MM月DD日 HH:MM');
};

onMounted(() => {
  onValue(fireRef(db, 'posts'), (snapshot) => {
    const data = snapshot.val();
    const formattedPosts = data ? Object.values(data).map(post => {
      post.comments = post.comments ? Object.values(post.comments) : [];
      return post;
    }) : [];
    posts.value = formattedPosts.reverse();
  }, (err) => {
    console.error('获取动态数据失败:', err);
  });

  const role = localStorage.getItem('YIERBUBU_ROLE');
  if (role === 'yier') {
    currentUser.value = users[0];
  } else if (role === 'bubu') {
    currentUser.value = users[1];
  }
  currentUser.value.name = localStorage.getItem('YIERBUBU_NAME') || '访客';
});

const convertImageToBase64 = (imageBlob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(imageBlob);
  });
};

const convertUrlToBlob = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return new Blob([arrayBuffer], { type: 'image/jpeg' });
};

const publishPost = async () => {
  if (!post.value.content && !post.value.images.length) {
    alert('请输入内容或上传图片');
    return;
  }

  const avatarBlob = await convertUrlToBlob(currentUser.value.avatar);
  const avatarBase64 = await convertImageToBase64(avatarBlob);
  const isEdit = !!post.value.originalId;
  const newPostData = {
    id: isEdit ? post.value.originalId : Date.now(),
    user: {
      ...currentUser.value,
      avatar: avatarBase64
    },
    content: post.value.content,
    images: post.value.images,
    comments: isEdit ? posts.value.find(p => p.id === post.value.originalId)?.comments || [] : [],
    timestamp: new Date().toLocaleString(),
    forgiven: false
  };
  try {
    await set(fireRef(db, `posts/${newPostData.id}`), newPostData);
    resetPostForm();
  } catch (err) {
    console.error('发布动态失败:', err);
    alert('发布失败，请重试');
  }
};

const resetPostForm = () => {
  post.value.content = '';
  post.value.images = [];
  post.value.originalId = null;
  showUpload.value = false;
};

const handleshowImageUpload = () => {
  showUpload.value = !showUpload.value;
};

const handlePostImageUpload = (e) => {
  const files = e.target.files;
  if (files) {
    post.value.images = [];
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        post.value.images.push(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
};

const editPost = (postToEdit) => {
  post.value.content = postToEdit.content;
  post.value.images = postToEdit.images || [];
  post.value.originalId = postToEdit.id;
};

const deletePost = async (postToDelete) => {
  if (confirm('确定要删除这条动态吗？')) {
    try {
      await remove(fireRef(db, `posts/${postToDelete.id}`));
    } catch (err) {
      console.error('删除动态失败:', err);
      alert('删除失败，请重试');
    }
  }
};

const addComment = async (postId, commentData) => {
  if (!commentData.content) return;

  const newCommentData = {
    user: currentUser.value,
    content: commentData.content,
    timestamp: new Date().toLocaleString(),
  };

  try {
    await set(
      fireRef(db, `posts/${postId}/comments/${Date.now()}`),
      newCommentData
    );
  } catch (err) {
    console.error('添加评论失败:', err);
  }
};

const toggleComments = (post) => {
  post.showComments = !post.showComments;
};

const toggleForgiven = async (post) => {
  try {
    await set(fireRef(db, `posts/${post.id}/forgiven`), !post.forgiven);
    post.forgiven = !post.forgiven;
  } catch (err) {
    console.error('切换原谅状态失败:', err);
  }
};

const handleTabChange = (tab) => {
  currentTab.value = tab;
};
</script>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  background-color: #f3f4f6;
  transition: background-color 0.3s ease;
}
</style>
