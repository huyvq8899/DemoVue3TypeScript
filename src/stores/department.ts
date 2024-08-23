import { defineStore } from 'pinia'
import type DepartmentDto from '~/apis/Api';

export const useMyDepartmentStore = defineStore({
  id: 'myDepartmentStore',
  state: () => ({
     listDepartments : ref<Array<DepartmentDto>>([]),
     }),
  actions: {
   async  getList() {
      const useDepartment = useDepartmentClient();
      return  await useDepartment.getDepartmentList();
    }
  }
})
