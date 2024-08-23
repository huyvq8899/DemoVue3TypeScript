<template>
  <div>
    <h1>Users Management</h1>
    <div class="content">
      <NuxtPage keepalive />
      <a-button type="primary" v-on:click="addCount()">click here to add count</a-button>
      <span>{{ abc }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

const abc = ref<number>(0);

const departmenrStore = useMyDepartmentStore();

onBeforeMount( async () => {


}) 

function addCount() : void {
abc.value = abc.value + 1;
}
/* Không có logic đặc biệt nào trong script cho thành phần cha này */
</script>

<style>
.content {
  overflow-y: auto;
  height: 400px; /* Giới hạn chiều cao để thấy được cuộn */
}
</style>
