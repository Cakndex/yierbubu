<template>
  <div class="app-container">
    <main class="app-main">
      <!-- Tab 栏 -->
      <TabBar :currentTab="currentTab" @tabChange="handleTabChange" />

      <!-- 筛选器组件 -->
      <FilterComponent ref="filterComponent" :posts="posts" />

      <!-- 内容区域根据当前标签页显示不同组件 -->
      <div v-if="currentTab === 'home'">
        <PostArea :currentUser="currentUser" :newPost="newPost" :showUpload="showUpload" @publishPost="publishPost"
          @handleImageUpload="handlePostImageUpload" />
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

// 数据初始化
const currentUser = ref({
  id: 3,
  name: '访客',
  avatar: RoleImg[2]
})

const users = [
  { id: 1, name: '一二', avatar: RoleImg[0] },
  { id: 2, name: '布布', avatar: RoleImg[1] },
];

const posts = ref([]); // 动态数据从数据库获取

const newPost = ref({
  content: '',
  images: [],
  originalId: null // 用于标识编辑的原始动态ID
})

const showUpload = ref(false)
const editingPost = ref(null) // 编辑中的动态对象

const filterComponent = ref(null);

// 计算属性 - 过滤动态
const filteredPosts = computed(() => {
  let result = posts.value;

  // 身份筛选
  if (filterComponent.value?.selectedIdentity) {
    result = result.filter(post => post.user.name === filterComponent.value.selectedIdentity);
  }

  // 时间筛选
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

// 使用 dayjs 插件设置默认时区为北京时间
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Shanghai");

// 日期格式化
const formatDate = (dateStr) => {
  return dayjs.tz(dateStr, "Asia/Shanghai").format('YYYY年MM月DD日 HH:MM');
};

// 生命周期钩子：初始化数据监听
onMounted(() => {
  onValue(fireRef(db, 'posts'), (snapshot) => {
    const data = snapshot.val();
    // 转换动态数组（包括评论）
    const formattedPosts = data ? Object.values(data).map(post => {
      // 将 comments 对象转为数组
      post.comments = post.comments ? Object.values(post.comments) : [];
      return post;
    }) : [];
    posts.value = formattedPosts.reverse();
  }, (err) => {
    console.error('获取动态数据失败:', err);
  });
  // 从 localStorage 获取角色信息（这部分仍使用本地存储，如需同步到数据库需额外处理）
  const role = localStorage.getItem('YIERBUBU_ROLE');
  if (role === 'yier') {
    currentUser.value = users[0];
  } else if (role === 'bubu') {
    currentUser.value = users[1];
  }
  currentUser.value.name = localStorage.getItem('YIERBUBU_NAME') || '访客';
});

// 头像转换为 Base64
const convertImageToBase64 = (imageBlob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(imageBlob);
  });
};

// 将 URL 转换为 Blob
const convertUrlToBlob = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return new Blob([arrayBuffer], { type: 'image/jpeg' });
};

// 发布动态（统一处理新建和编辑发布）
const publishPost = async (postData) => {
  if (!postData.content && !postData.images.length) {
    alert('请输入内容或上传图片');
    return;
  }
  // 将用户头像 URL 转换为 Blob，然后转换为 Base64
  const avatarBlob = await convertUrlToBlob(currentUser.value.avatar);
  const avatarBase64 = await convertImageToBase64(avatarBlob);
  const isEdit = !!postData.originalId; // 判断是否为编辑状态
  const newPostData = {
    id: isEdit ? postData.originalId : Date.now(), // 编辑时使用原ID，新建时生成新ID
    user: {
      ...currentUser.value,
      avatar: avatarBase64 // 使用 Base64 格式的头像
    },
    content: postData.content,
    images: postData.images,
    comments: isEdit ? posts.value.find(p => p.id === postData.originalId)?.comments || [] : [], // 保留原评论
    timestamp: isEdit
      ? new Date(posts.value.find(p => p.id === postData.originalId)?.timestamp).toLocaleString()
      : new Date().toLocaleString(), // 保留原时间或生成新时间
    forgiven: false
  };
  try {
    if (isEdit) {
      // 编辑场景：更新指定节点（直接通过 db 构建路径）
      await set(fireRef(db, `posts/${newPostData.originalId}`), newPostData);
    } else {
      // 新建场景：推送到数据库（自动生成唯一键，但这里使用自定义ID）
      await set(fireRef(db, `posts/${newPostData.id}`), newPostData);
    }
    resetPostForm(true); // 重置表单
  } catch (err) {
    console.error('发布动态失败:', err);
    alert('发布失败，请重试');
  }
};

// 重置发布表单（增加isEdit参数区分编辑场景）
const resetPostForm = (isEdit = false) => {
  newPost.value.content = '';
  newPost.value.images = [];
  newPost.value.originalId = null; // 清除原始ID
  showUpload.value = false;
  editingPost.value = null; // 清除编辑状态
  if (!isEdit) { // 编辑场景不重置评论（保留原动态评论）
    // 这里假设评论相关状态在其他地方管理
  }
};

// 处理图片上传
const handlePostImageUpload = (e) => {
  const files = e.target.files;
  if (files) {
    newPost.value.images = [];
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPost.value.images.push(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
};

// 编辑动态
const editPost = (post) => {
  newPost.value.content = post.content;
  newPost.value.images = post?.images ?? []
  newPost.value.originalId = post.id; // 记录原始动态ID
  editingPost.value = { ...post }; // 存储编辑前的动态副本
};

// 删除动态（直接通过 db 构建路径）
const deletePost = async (post) => {
  if (confirm('确定要删除这条动态吗？')) {
    try {
      await remove(fireRef(db, `posts/${post.id}`)); // 从数据库删除
    } catch (err) {
      console.error('删除动态失败:', err);
      alert('删除失败，请重试');
    }
  }
};

// 添加评论（直接通过 db 构建路径）
const addComment = async (postId, commentData) => {
  if (!commentData.content) return;

  const newCommentData = {
    user: currentUser.value,
    content: commentData.content,
    timestamp: new Date().toLocaleString(),
  };

  try {
    // 使用时间戳作为唯一键，存储为对象
    await set(
      fireRef(db, `posts/${postId}/comments/${Date.now()}`),
      newCommentData
    );
    // 这里假设评论输入框的重置在其他地方处理
  } catch (err) {
    console.error('添加评论失败:', err);
  }
};

// 切换评论显示（本地状态，无需同步数据库）
const toggleComments = (post) => {
  post.showComments = !post.showComments;
};

// 切换原谅状态
const toggleForgiven = async (post) => {
  try {
    await set(fireRef(db, `posts/${post.id}/forgiven`), !post.forgiven);
    // 更新本地状态
    post.forgiven = !post.forgiven;
    console.log(111, post);
    console.log('切换原谅状态成功:', filteredPosts.value);
  } catch (err) {
    console.error('切换原谅状态失败:', err);
  }
};

// 处理标签页切换
const handleTabChange = (tab) => {
  currentTab.value = tab;
};
</script>

<style lang="scss" scoped>
// 这里只保留全局样式，组件内部样式在各自组件中定义
.app-container {
  min-height: 100vh;
  background-color: #f3f4f6;
  transition: background-color 0.3s ease;
}
</style>
