<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="role-selection-modal">
      <div class="modal-content">
        <h3 class="modal-title">请选择您的身份</h3>
        <div class="role-cards">
          <RoleCard v-for="role in roles" :key="role.id" :role="role" :selectedRole="selectedRole"
            @select="handleRoleSelection" />
        </div>
        <button class="confirm-button" @click="confirmSelection">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import RoleCard from './RoleCard.vue'
import { RoleImg } from '../../assets/yierbubu/index'

const showModal = ref(false)
const roles = ref([
  { id: 'yier', name: '一二', icon: RoleImg[0], description: '公主专属身份' },
  { id: 'bubu', name: '布布', icon: RoleImg[1], description: '王子专属身份' },
  { id: 'guest', name: '访客', icon: RoleImg[2], description: '访客身份' }
])
const selectedRole = ref(null)

onMounted(() => {
  const storedRole = localStorage.getItem('yierbubu-role')
  const storedRoleTime = localStorage.getItem('yierbubu-role-time')

  if (storedRole) {
    if (storedRole === 'guest') {
      showModal.value = false
    } else if (storedRoleTime) {
      const currentTime = new Date().getTime()
      const timeDiff = currentTime - new Date(storedRoleTime).getTime()
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24)

      if (daysDiff > 7) {
        localStorage.removeItem('yierbubu-role')
        localStorage.removeItem('yierbubu-role-time')
        showModal.value = true
      } else {
        showModal.value = false
      }
    }
  } else {
    showModal.value = true
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
}

const confirmSelection = () => {
  if (selectedRole.value) {
    localStorage.setItem('yierbubu-role', selectedRole.value)
    localStorage.setItem('yierbubu-role-time', new Date().toISOString())
    showModal.value = false
  } else {
    alert('请选择一个身份')
  }
}
</script>


<style scoped lang="scss">
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
  max-height: 500px;
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

.no-scroll {
  overflow: hidden !important;
}
</style>
