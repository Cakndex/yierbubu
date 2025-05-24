<template>
  <div class="feed-list">
    <div class="feed-card" v-for="post in filteredPosts" :key="post.id">
      <div class="feed-header">
        <img :src="post.user.avatar" alt="头像" class="feed-avatar">
        <div class="feed-user-info">
          <div>{{ post.user.name }}</div>
          <span>{{ formatDate(post.timestamp) }}</span>
        </div>
        <div class="feed-actions">
          <div class="feed-actions-group">
            <button v-if="post.user.id === currentUser.id" @click="emitEditPost(post)">
              <i class="fa fa-pen"></i>
            </button>
            <button v-if="post.user.id === currentUser.id" @click="emitDeletePost(post)">
              <i class="fa fa-trash"></i>
            </button>
          </div>
          <div v-if="[1, 2].includes(post.user.id)" @click="emitToggleForgiven(post)"
            :class="post.forgiven ? 'forgiven-status forgiven' : 'forgiven-status unforgiven'">
            {{ post.forgiven ? '已原谅' : '未原谅' }}
          </div>
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
          <button @click="emitToggleComments(post)" class="comment-button">
            {{ post.comments?.length || 0 }}条留言，点击留言
          </button>
          <div class="comment-list">
            <div class="comment" v-for="(comment, index) in post.comments" :key="index">
              <span class="comment-user">{{ comment.user.name }}:</span>
              <span class="comment-text">{{ comment.content }}</span>
            </div>
            <div class="comment-input" v-show="post.showComments">
              <textarea v-model="newComment.content" placeholder="留下你的评论..." class="comment-textarea"></textarea>
              <button @click="emitAddComment(post.id, newComment)" class="comment-submit-button">发表</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// 使用 dayjs 插件设置默认时区为北京时间
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Shanghai");

const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
  filteredPosts: {
    type: Array,
    required: true
  },
  currentUser: {
    type: Object,
    required: true
  }
})

const emits = defineEmits([
  'editPost',
  'deletePost',
  'toggleForgiven',
  'toggleComments',
  'addComment'
])

const newComment = { content: '' }

// 日期格式化
const formatDate = (dateStr) => {
  return dayjs.tz(dateStr, "Asia/Shanghai").format('YYYY年MM月DD日 HH:MM');
};

// 编辑动态
const emitEditPost = (post) => {
  emits('editPost', post);
};

// 删除动态
const emitDeletePost = (post) => {
  emits('deletePost', post);
};

// 切换原谅状态
const emitToggleForgiven = (post) => {
  post.user.id === props.currentUser.id
  emits('toggleForgiven', post);
};

// 切换评论显示
const emitToggleComments = (post) => {
  emits('toggleComments', post);
};

// 添加评论
const emitAddComment = (postId, commentData) => {
  emits('addComment', postId, commentData);
  newComment.content = ''; // 发送后重置评论输入
};
</script>

<style lang="scss" scoped>
@use "sass:color";

// 颜色变量
$primary: #42b983; // 主色调-蓝色，代表信任和社交
$neutral-100: #F3F4F6; // 最浅中性色
$neutral-200: #E5E7EB; // 浅中性色
$neutral-300: #D1D5DB; // 中性色
$neutral-600: #4B5563; // 深中性色

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

  &:hover {
    box-shadow: 4px 12px rgba(0, 0, 0, 0.1);
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
      flex-direction: column;
      gap: 8px;
      width: 50px;

      .feed-actions-group {
        display: flex;
        gap: 8px;
      }

      button {
        background: none;
        border: none;
        color: $neutral-600;
        cursor: pointer;
        padding: 4px;
        border-radius: 50%;

        &:hover {
          background-color: $neutral-100;
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

      .comment-button {
        background: none;
        border: none;
        color: #4B5563;
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
            border: none;

            &:hover {
              background-color: color.scale($primary, $lightness: -10%);
            }
          }
        }
      }
    }
  }
}

.forgiven-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 4px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
}

.forgiven {
  background-color: green;
}

.unforgiven {
  background-color: red;
}
</style>
