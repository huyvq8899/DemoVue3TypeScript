<template>
    <div>
        <h1> Working Page </h1>
        <h1> {{router.currentRoute.value.params.group }}  {{ router.currentRoute.value.params.id }}</h1>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>
