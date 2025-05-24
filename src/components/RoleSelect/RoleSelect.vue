<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="role-selection-modal">
      <div class="modal-content">
        <h3 class="modal-title">请选择您的身份</h3>
        <div class="role-cards">
          <RoleCard v-for="role in roles" :key="role.id" :role="role" :selectedRole="selectedRole"
            @select="handleRoleSelection" />
        </div>
        <div class="username-input">
          <label for="username">请输入您的用户名:</label>
          <input type="text" id="username" v-model="username" placeholder="请输入用户名" />
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button class="confirm-button" @click="confirmSelection" :disabled="isSubmitting">
          {{ isSubmitting ? '提交中...' : '确定' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import RoleCard from './RoleCard.vue'
import { RoleImg } from '../../assets/yierbubu/index'
import {
  ref as fireRef,
  push,
  set,
  get,
  query,
  orderByChild,
  equalTo
} from 'firebase/database'
import db from '../../services/firebase'

const usersRef = fireRef(db, 'users');

const showModal = ref(false)
const roles = ref([
  { id: 'yier', name: '一二', icon: RoleImg[0], description: '公主专属身份' },
  { id: 'bubu', name: '布布', icon: RoleImg[1], description: '王子专属身份' },
  { id: 'guest', name: '访客', icon: RoleImg[2], description: '访客身份' }
])
const selectedRole = ref(null)
const username = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)

onMounted(() => {
  // 清除旧的存储
  if (localStorage.getItem('yierbubu-role')) {
    localStorage.removeItem('yierbubu-role')
    localStorage.removeItem('yierbubu-role-time')
  }

  // 检查是否有新的角色存储
  const storedRole = localStorage.getItem('YIERBUBU_ROLE')

  if (!storedRole) {
    showModal.value = true
  } else {
    showModal.value = false
  }
})

watch(showModal, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})

const handleRoleSelection = (roleId) => {
  selectedRole.value = roleId
  errorMessage.value = '' // 清除之前的错误信息
}

const checkUsernameAndRoleConflict = async () => {
  // 检查输入是否为空
  if (!selectedRole.value) {
    return '请选择一个身份'
  }

  if (!username.value.trim()) {
    return '请输入用户名'
  }

  // 检查特殊角色占用情况
  if (selectedRole.value === 'yier' || selectedRole.value === 'bubu') {
    const specialRolesQuery = query(usersRef, orderByChild('role'), equalTo('yier'))
    const specialRolesSnapshot = await get(specialRolesQuery)

    let specialRolesCount = 0
    if (specialRolesSnapshot.exists()) {
      specialRolesCount += specialRolesSnapshot.size
    }

    const bubuRolesQuery = query(usersRef, orderByChild('role'), equalTo('bubu'))
    const bubuRolesSnapshot = await get(bubuRolesQuery)

    if (bubuRolesSnapshot.exists()) {
      specialRolesCount += bubuRolesSnapshot.size
    }

    if (specialRolesCount > 4) {
      return '特殊角色数量已达上限，请选择其他身份'
    }
  }

  // 检查用户名是否重复
  const usernameQuery = query(usersRef, orderByChild('username'), equalTo(username.value))
  const snapshot = await get(usernameQuery)

  if (snapshot.exists()) {
    return '该用户名已被使用，请选择其他用户名'
  }

  return null // 没有冲突
}


const confirmSelection = async () => {
  if (isSubmitting.value) return

  try {
    isSubmitting.value = true
    errorMessage.value = ''

    // 检查冲突
    const conflictError = await checkUsernameAndRoleConflict()
    if (conflictError) {
      errorMessage.value = conflictError
      return
    }

    // 保存到 localStorage
    localStorage.setItem('YIERBUBU_ROLE', selectedRole.value)
    localStorage.setItem('YIERBUBU_NAME', username.value)

    // 保存到 Firebase - 写法已符合 v11 规范
    const newUserRef = push(usersRef)
    await set(newUserRef, {
      role: selectedRole.value,
      username: username.value,
      createdAt: new Date().toISOString()
    })

    showModal.value = false
  } catch (error) {
    console.error('保存用户信息失败:', error)
    errorMessage.value = '保存失败，请稍后再试'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
/* 样式部分保持不变 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.role-selection-modal {
  width: 90%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    max-height: 600px;
    width: 100%;

    .modal-title {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      margin: 2rem 0;
    }

    .role-cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      padding: 0 1rem 1rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .username-input {
      margin: 0 2rem 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: #42b983;
          box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
        }
      }
    }

    .error-message {
      color: #dc3545;
      text-align: center;
      margin: 0.5rem 2rem 1rem;
      font-size: 0.9rem;
    }

    .confirm-button {
      display: block;
      width: 80%;
      margin-left: 10%;
      margin-bottom: 5%;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      background-color: #42b983;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        background-color: #0056b3;
      }

      &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
      }
    }
  }
}

.no-scroll {
  overflow: hidden !important;
}
</style>
