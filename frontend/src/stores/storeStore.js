import { defineStore } from 'pinia'
import { loadStores } from '@/api/storeApi'

export const useStoreStorage = defineStore('stores', {
  state: () => ({
    stores: [],
    isLoadingStores: false,
  }),

  actions: {
    async getStores() {
      await loadStores(this);
    }
  }
})
