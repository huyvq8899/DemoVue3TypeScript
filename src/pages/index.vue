<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <DepartmentModal
      v-model:visible="isModalVisible"
      :isEditMode="isEditMode"
      :department="selectedDepartment || {}"
      @submit="handleSubmit"
    />
  </div>
</template>

<script lang="ts">
import type DepartmentDto from '~/apis/Api';
import DepartmentModal from '~/components/DepartmentModal.vue';

export default defineComponent({
  components: {
    DepartmentModal,
  },
  setup() {
    const isModalVisible = ref(false);
    const isEditMode = ref(false);
    const selectedDepartment = ref<DepartmentDto>({ code: '', name: '' });

    const showModal = () => {
      isEditMode.value = true; // or false depending on the context
      isModalVisible.value = true;
    };

    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Form submitted:', selectedDepartment.value);
    };

    return {
      isModalVisible,
      isEditMode,
      selectedDepartment,
      showModal,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
