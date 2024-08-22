<template>
  <div>
    <p>{{ router.currentRoute.value.params.slug }}</p>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style>

</style>