<template>
  <a-modal v-model:open="visible" :title="modalTitle" @ok="submitForm" @cancel="closeModal">
    <a-form :model="department">
      <a-form-item label="Department Code">
        <a-input v-model:value="department.code" />
      </a-form-item>
      <a-form-item label="Department Name">
        <a-input v-model:value="department.name" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">

interface DepartmentDto {
  code: string;
  name: string;
}

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    isEditMode: {
      type: Boolean,
      required: true,
    },
    department: {
      type: Object as PropType<DepartmentDto>,
      required: false,
    },
  },
  emits: ['update:visible', 'submit'],
  setup(props: { isEditMode: any; department: any; }, { emit }: any) {
    const modalTitle = computed(() => (props.isEditMode ? 'View' : 'Update'));

    const submitForm = () => {
      emit('submit');
      emit('update:visible', false);
    };
    
    const closeModal = () => {
      emit('closeModal');
      emit('update:visible', false);
    };

    return {
      modalTitle,
      submitForm,
      closeModal,
      formModel: props.department,
    };
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
