<template>

  <a-row style="background-color: #00833e; padding: 4px;;" class="toolbar-top">
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6">col-6</a-col>
    <a-col :span="6" style="display: flex; justify-content: flex-end;" >
      <a-button type="primary" icon="plus" @click="hanldeReload(true)">Add</a-button>
    </a-col>
  </a-row>

  <a-table :columns="columns" :data-source="departmentStore.listDepartments">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          <smile-outlined />
          Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a-button type="primary" @click="openModal(record)">view</a-button>

          <a-divider type="vertical" />
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link">
            More actions
            <down-outlined />
          </a>
        </span>
      </template>
    </template>
  </a-table>

  <DepartmentModal
      v-model:visible="isModalVisible"
      :isEditMode="isEditMode"
      :department="selectedDepartment || {}"
      @submit="handleSubmit"
      @cancel="closeModal"
    />
    


</template>
<script lang="ts" setup>
import type DepartmentDto from '~/apis/Api';

const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const listDepartments = ref<Array<DepartmentDto>>([]);

const isModalVisible = ref<boolean>(false);
const isEditMode = ref<boolean>(false);
  const selectedDepartment = ref<DepartmentDto>();
const departmentStore = useMyDepartmentStore();

onBeforeMount(async () => {
  departmentStore.listDepartments = (await departmentStore.getList()).data;

})

async function hanldeReload(reload : boolean) {
  departmentStore.listDepartments = (await departmentStore.getList()).data;
}

function openModal(item : DepartmentDto) {
  console.log("🚀 ~ openModal ~ item:", item)
  isModalVisible.value = true;
  isEditMode.value = false;
  selectedDepartment.value = item;
 }

 function closeModal() {
  isModalVisible.value = false;
 }

 function handleSubmit() {
  isModalVisible.value = false;
 }
 function submitForm() {

 }

 function deleteDepartment(id : string | undefined) {
  
 }

</script>

<style>

</style>