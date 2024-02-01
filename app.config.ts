export default defineAppConfig({
  title: process.env.NUXT_TITLE,
  ui: {
    icons: 'all',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto'
    }
  }
})
