export const useUserPinia = defineStore('user', {
  state: () => ({
    nanoid: 1000
  }),
  getters: {
    getNanoid: (state) => state.nanoid
  },
  actions: {
    setNanoid() {
      this.nanoid += 10
    }
  },
  persist: [
    {
      paths: ['nanoid'],
      storage: persistedState.cookiesWithOptions({ maxAge: 604800 })
    }
  ]
})
