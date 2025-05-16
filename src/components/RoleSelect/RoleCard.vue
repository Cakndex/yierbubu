<template>
  <div class="role-card" @click="handleClick">
    <img :src="role.icon" class="icon" width="36"/>
    <div class="name">{{ role.name }}</div>
    <div class="description">{{ role.description }}</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  role: Object
})

const emit = defineEmits(['select'])

const handleClick = () => {
  emit('select', props.role.id)
}
</script>

<style scoped>
.role-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.875rem;
    color: #64748b;
    text-align: center;
  }
}
</style>
