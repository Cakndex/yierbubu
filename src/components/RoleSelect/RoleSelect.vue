<template>
  <div v-if="showModal" class="role-selection-modal">
    <div class="modal-content">
      <h3 class="modal-title">请选择您的身份</h3>
      <div class="role-cards">
        <RoleCard v-for="role in roles" :key="role.id" :role="role" @select="handleRoleSelection" />
      </div>
      <button class="confirm-button" @click="confirmSelection">确定</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RoleCard from './RoleCard.vue'
import { RoleImg } from '../../assets/yierbubu/index'

const showModal = ref(false)
const roles = ref([
  { id: 'yier', name: '一二', icon: RoleImg[0], description: '公主的专属身份' },
  { id: 'bubu', name: '布布', icon: RoleImg[1], description: '王子的专属身份' },
  { id: 'guest', name: '访客', icon: RoleImg[2], description: '访客身份' }
])
const selectedRole = ref(null)

onMounted(() => {
  const storedRole = localStorage.getItem('yierbubu-role')
  if (!storedRole) {
    showModal.value = true
  }
})

const handleRoleSelection = (roleId) => {
  selectedRole.value = roleId
}

const confirmSelection = () => {
  if (selectedRole.value) {
    localStorage.setItem('yierbubu-role', selectedRole.value)
    showModal.value = false
  } else {
    alert('请选择一个身份')
  }
}
</script>

<style scoped lang="scss">
.role-selection-modal {
  position: fixed;
  top: 20%;
  left: 5%;
  width: 90%;
  max-height: 500px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    max-height: 500px;
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
      padding: 0 1rem 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
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

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
</style>
