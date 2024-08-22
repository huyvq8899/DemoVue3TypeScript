<template>
  <div>
<h1>I am a child view</h1>
    
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  key: route => route.fullPath,
  title: 'My home page'
})
const route = useRouter();
const props = defineProps<{ foobar: number }>()
console.log(route.currentRoute.value.meta.title);
console.log(props.foobar)
</script>

<style>

</style>