<template>
  <div class="app-container">
    <main class="app-main">
      <!-- Tab 栏 -->
      <div class="tab-bar">
        <button @click="currentTab = 'home'" :class="{ 'active': currentTab === 'home' }">说说主页</button>
        <button @click="currentTab = 'stats'" :class="{ 'active': currentTab === 'stats' }">统计分析</button>
      </div>
      <!-- 发布动态区域和动态列表 -->
      <div v-show="currentTab === 'home'">
        <!-- 发布动态区域 -->
        <div class="post-area">
          <div class="post-card">
            <div class="post-header">
              <img :src="currentUser.avatar" alt="头像" class="post-avatar">
              <div class="post-info">
                <div class="post-name">{{ currentUser.name }}</div>
                <span class="post-time">{{ formatDate(new Date().toISOString()) }}</span>
              </div>
            </div>
            <div class="post-form">
              <textarea v-model="newPost.content" placeholder="今天有什么值得记录的事？" class="post-textarea"
                @focus="showImageUpload"></textarea>
              <div class="post-actions">
                <div class="image-upload" v-show="showUpload">
                  <input type="file" id="post-image" @change="handlePostImageUpload" multiple class="hidden-input">
                  <label for="post-image" class="upload-btn">
                    <i class="fa fa-image"></i> 上传图片
                  </label>

                </div>
                <button @click="publishPost" class="publish-btn">发布</button>
              </div>
              <div class="image-preview" v-if="newPost.images.length">
                <div class="image-grid">
                  <img :src="url" alt="预览" class="preview-img" v-for="url in newPost.images" :key="url">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 动态列表 -->
        <div class="feed-list">
          <div class="feed-card" v-for="post in filteredPosts" :key="post.id">
            <div class="feed-header">
              <img :src="post.user.avatar" alt="头像" class="feed-avatar">
              <div class="feed-user-info">
                <div>{{ post.user.name }}</div>
                <span>{{ formatDate(post.timestamp) }}</span>
              </div>
              <div class="feed-actions">
                <button @click="editPost(post)" v-if="post.user.id === currentUser.id">
                  <i class="fa fa-pen"></i>
                </button>
                <button @click="deletePost(post)" v-if="post.user.id === currentUser.id">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
            <div class="feed-content">
              <p>{{ post.content }}</p>
              <div class="feed-images">
                <img :src="url" alt="动态图片" class="feed-img" v-for="url in post.images" :key="url">
              </div>
            </div>
            <div class="feed-footer">
              <div class="comment-section">
                <button @click="toggleComments(post)">
                  {{ post.comments?.length || 0 }}条留言，点击留言
                </button>
                <div class="comment-list">
                  <div class="comment" v-for="(comment, index) in post.comments" :key="index">
                    <span class="comment-user">{{ comment.user.name }}:</span>
                    <span class="comment-text">{{ comment.content }}</span>
                  </div>
                  <div class="comment-input" v-show="post.showComments">
                    <textarea v-model="newComment.content" placeholder="留下你的评论..." class="comment-textarea"></textarea>
                    <button @click="addComment(post)">发表</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 统计分析区域 -->
      <div v-show="currentTab === 'stats'" class="stats-area">
        <StatsComponent :posts="posts" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue'
import dayjs from 'dayjs'
import { RoleImg } from '../../assets/yierbubu/index'
import StatsComponent from './StatsComponent.vue'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as fireRef, onValue, set, remove } from 'firebase/database';

// Firebase 配置（与第一个示例保持一致）
const firebaseConfig = {
  apiKey: "AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o",
  authDomain: "yierbubu.firebaseapp.com",
  projectId: "yierbubu",
  storageBucket: "yierbubu.firebasestorage.app",
  messagingSenderId: "745521053033",
  appId: "1:745521053033:web:57602c1e935aa1cca811f8",
  measurementId: "G-7TF1KMZJBQ",
  databaseURL: 'https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// 初始化 Firebase 数据库（移除 postsRef 声明）
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const currentTab = ref('home');

// 数据初始化
const currentUser = ref({
  id: 1,
  name: '一二',
  avatar: RoleImg[0]
})

const users = [
  { id: 1, name: '一二', avatar: RoleImg[0] },
  { id: 2, name: '布布', avatar: RoleImg[1] },
];

const posts = ref([]); // 动态数据从数据库获取

const newPost = reactive({
  content: '',
  images: [],
  originalId: null // 用于标识编辑的原始动态ID
})

const newComment = reactive({ content: '' })
const showUpload = ref(false)
const searchText = ref('')
const editingPost = ref(null) // 编辑中的动态对象

const showImageUpload = () => {
  showUpload.value = true
}

// 计算属性 - 过滤动态
const filteredPosts = computed(() => {
  if (!searchText.value) return posts.value;
  return posts.value.filter(post =>
    post.content.includes(searchText.value) ||
    post.comments.some(comment => comment.content.includes(searchText.value))
  );
});

// 日期格式化
const formatDate = (dateStr) => {
  return dayjs(dateStr).format('YYYY年MM月DD日');
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
  const role = localStorage.getItem('yierbubu-role');
  if (role === 'yier') {
    currentUser.value = users[0];
  } else if (role === 'bubu') {
    currentUser.value = users[1];
  }
});

// 发布动态（统一处理新建和编辑发布）
const publishPost = async () => {
  if (!newPost.content && !newPost.images.length) {
    alert('请输入内容或上传图片');
    return;
  }

  const isEdit = !!newPost.originalId; // 判断是否为编辑状态
  const newPostData = {
    id: isEdit ? newPost.originalId : Date.now(), // 编辑时使用原ID，新建时生成新ID
    user: currentUser.value,
    content: newPost.content,
    images: newPost.images,
    comments: isEdit ? posts.value.find(p => p.id === newPost.originalId)?.comments || [] : [], // 保留原评论
    timestamp: isEdit
      ? new Date(posts.value.find(p => p.id === newPost.originalId)?.timestamp).toISOString()
      : new Date().toISOString(), // 保留原时间或生成新时间
    forgiven: false
  };
  try {
    if (isEdit) {
      // 编辑场景：更新指定节点（直接通过 db 构建路径）
      await set(fireRef(db, `posts/${newPost.originalId}`), newPostData);
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
  newPost.content = '';
  newPost.images = [];
  newPost.originalId = null; // 清除原始ID
  showUpload.value = false;
  editingPost.value = null; // 清除编辑状态
  if (!isEdit) { // 编辑场景不重置评论（保留原动态评论）
    newComment.content = '';
  }
};

// 处理图片上传
const handlePostImageUpload = (e) => {
  const files = e.target.files;
  if (files) {
    newPost.images = [];
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPost.images.push(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
};

// 编辑动态
const editPost = (post) => {
  newPost.content = post.content;
  newPost.images = post?.images ?? []
  newPost.originalId = post.id; // 记录原始动态ID
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
const addComment = async (post) => {
  if (!newComment.content) return;

  const newCommentData = {
    user: currentUser.value,
    content: newComment.content,
    timestamp: new Date().toISOString(),
  };

  try {
    // 使用时间戳作为唯一键，存储为对象
    await set(
      fireRef(db, `posts/${post.id}/comments/${Date.now()}`),
      newCommentData
    );
    newComment.content = '';
  } catch (err) {
    console.error('添加评论失败:', err);
  }
};

// 切换评论显示（本地状态，无需同步数据库）
const toggleComments = (post) => {
  post.showComments = !post.showComments;
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:color";
// 颜色变量
$primary: #42b983; // 主色调-蓝色，代表信任和社交
$secondary: #F43F5E; // 辅助色-红色，代表情感和焦点
$neutral-100: #F3F4F6; // 最浅中性色
$neutral-200: #E5E7EB; // 浅中性色
$neutral-300: #D1D5DB; // 中性色
$neutral-600: #4B5563; // 深中性色
$neutral-800: #1F2937; // 最深中性色
$dark-bg: #111827; // 暗黑模式背景


.app-container {
  min-height: 100vh;
  background-color: $neutral-100;
  transition: background-color 0.3s ease;

  &.dark {
    background-color: $dark-bg;
    color: white;
  }
}

.tab-bar {
  width: 100%;
  height: 60px;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;

  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: $neutral-600;
    font-weight: 600;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .active {
    color: $primary ;
    border-bottom: 2px solid $primary;
  }
}

.post-area {
  padding: 24px 16px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
}

.post-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 16px;
  transition: all 0.3s ease;

  .dark & {
    background-color: $neutral-800;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .post-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .post-name {
    font-size: 16px;
    font-weight: 600;
  }

  .post-time {
    font-size: 12px;
    color: $neutral-600;
  }
}

.post-form {
  .post-textarea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 16px;
    min-height: 100px;
    padding: 8px 0;
    outline: none;

    &::placeholder {
      color: $neutral-300;
    }
  }

  .post-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .image-upload {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .hidden-input {
        display: none;
      }

      .upload-btn {
        background-color: $neutral-100;
        color: $neutral-600;
        padding: 8px 16px;
        border-radius: 999px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.2s ease;

        &:hover {
          background-color: $neutral-200;

          .dark & {
            background-color: color.scale($neutral-800, $lightness: 10%);
          }
        }

        i {
          margin-right: 4px;
        }
      }


    }

    .publish-btn {
      background-color: $primary;
      color: white;
      padding: 8px 24px;
      border-radius: 999px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;

      &:hover {
        background-color: color.scale($primary, $lightness: -10%);
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }


  }

  .image-preview {
    display: flex;
    margin: 8px;

    .image-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .preview-img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      position: relative;
    }
  }
}

.feed-list {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feed-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 16px;
  transition: all 0.3s ease;

  .dark & {
    background-color: $neutral-800;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .feed-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .feed-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .feed-user-info {
      flex: 1;

      h3 {
        font-size: 16px;
        font-weight: 600;
      }

      span {
        font-size: 12px;
        color: $neutral-600;
      }
    }

    .feed-actions {
      display: flex;
      gap: 8px;

      button {
        background: none;
        border: none;
        color: $neutral-600;
        cursor: pointer;
        padding: 4px;
        border-radius: 50%;

        &:hover {
          background-color: $neutral-100;

          .dark & {
            background-color: color.scale($neutral-800, $lightness: 10%);
          }
        }
      }
    }
  }

  .feed-content {
    margin-bottom: 16px;

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 12px;
    }

    .feed-images {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .feed-img {
        width: 30%;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }

  .feed-footer {
    .comment-section {
      margin-top: 8px;
      border-bottom: 1px solid $neutral-100;

      .dark & {
        border-color: color.scale($neutral-800, $lightness: 20%);
      }

      .like-count {
        font-size: 14px;
        color: $neutral-600;
      }
    }

    .comment-section {
      margin-top: 8px;



      .comment-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .comment {
          padding: 8px;
          background-color: $neutral-100;
          border-radius: 8px;

          .dark & {
            background-color: color.scale($neutral-800, $lightness: 10%);
          }

          .comment-user {
            font-weight: 600;
            margin-right: 4px;
          }

          .comment-text {
            font-size: 14px;
          }
        }

        .comment-input {
          display: flex;
          gap: 8px;
          margin-top: 8px;

          .comment-textarea {
            flex: 1;
            border: 1px solid $neutral-200;
            border-radius: 999px;
            padding: 0px 12px;
            height: 35px;
            line-height: 33px;
            font-size: 14px;
            resize: none;
            outline: none;

            .dark & {
              background-color: color.scale($neutral-800, $lightness: 10%);
              border-color: color.scale($neutral-800, $lightness: 20%);
              color: white;
            }

            &::placeholder {
              color: $neutral-300;
            }
          }

          button {
            background-color: $primary;
            color: white;
            padding: 8px 16px;
            border-radius: 999px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;

            &:hover {
              background-color: color.scale($primary, $lightness: -10%);
            }
          }
        }
      }
    }
  }
}

// 工具类
.hidden {
  display: none;
}

button {
  background: none;
  border: none;
  color: $neutral-600;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 0;

  &:hover {
    color: $primary;
  }
}
</style>
