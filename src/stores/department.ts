import { defineStore } from 'pinia'
import type DepartmentDto from '~/apis/Api';

export const useMyDepartmentStore = defineStore({
  id: 'myDepartmentStore',
  state: () => ({
    items: [] as DepartmentDto[],
   }),
  actions: {
   async  getList() {
      const useDepartment = useDepartmentClient();
      var rs = await useDepartment.getDepartmentList()
    }
  }
})
