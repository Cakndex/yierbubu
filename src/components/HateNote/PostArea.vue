<template>
  <div class="post-area">
    <div class="post-card">
      <div class="post-header">
        <img :src="currentUser.avatar" alt="头像" class="post-avatar">
        <div class="post-info">
          <div class="post-name">{{ currentUser.name }}</div>
          <span class="post-time">{{ new Date().toLocaleString() }}</span>
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
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  currentUser: {
    type: Object,
    required: true
  },
  newPost: {
    type: Object,
    required: true
  },
  showUpload: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['publishPost', 'handleImageUpload', 'showImageUpload'])


// 显示图片上传控件
const showImageUpload = () => {
  emits('showImageUpload', true);
};

// 发布动态
const publishPost = () => {
  emits('publishPost', props.newPost);
};

// 处理图片上传
const handlePostImageUpload = (e) => {
  emits('handleImageUpload', e);
};
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "sass:color";
// 颜色变量
$primary: #42b983; // 主色调-蓝色，代表信任和社交
$neutral-100: #F3F4F6; // 最浅中性色
$neutral-200: #E5E7EB; // 浅中性色
$neutral-300: #D1D5DB; // 中性色
$neutral-600: #4B5563; // 深中性色

.post-area {
  padding: 24px 16px;
  max-width: 800px;
  margin: 0 auto;
}

.post-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 16px;
  transition: all 0.3s ease;

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
      border: none;

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
</style>
