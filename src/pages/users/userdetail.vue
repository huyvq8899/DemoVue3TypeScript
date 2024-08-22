<template>
  <div>
    <h1>User Detail</h1>
    <p>{{ userDetail }}</p>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute();
const userDetail = ref('');




onMounted(() => {
  userDetail.value = `Details of user with ID: ${route.params.id}`;
});
</script>

<style>
/* Your styles here */
</style>
