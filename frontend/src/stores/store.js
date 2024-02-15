import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreStorage = defineStore('stores', {
  state: () => ({
    stores: [],
    isLoadingStores: false,
  }),

  actions: {
    async getStores() {
        this.isLoadingStores = true
        const res = await axios.get('http://localhost:3000/store/show_all');
        this.stores = await res.data
        this.isLoadingStores = false
    }
  }
})
