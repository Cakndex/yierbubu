<template>
  <div class="stats-container">
    <h2>统计分析</h2>
    <div class="stats-table">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>一二</th>
            <th>布布</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, date) in statsData" :key="date">
            <td>{{ date }}</td>
            <td :class="{ active: entry.yier }"></td>
            <td :class="{ active: entry.bubu }"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  posts: Array
});

const statsData = computed(() => {
  const data = {};
  props.posts.forEach(post => {
    const date = post.timestamp.split(' ')[0];
    if (!data[date]) {
      data[date] = { yier: false, bubu: false };
    }
    if (post.user.name === '一二') {
      data[date].yier = true;
    } else if (post.user.name === '布布') {
      data[date].bubu = true;
    }
  });
  return data;
});
</script>

<style scoped>
.stats-container {
  padding: 24px;
}

.stats-table {
  margin-top: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
}

td.active {
  background-color: #4caf50;
  color: white;
}
</style>
