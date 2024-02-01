// 登录权限验证
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) console.log('路由跳转监听', to, from)
  // 中止导航，并带有可选的错误消息。
  // abortNavigation 停止当前导航
  // abortNavigation(error) 拒绝当前导航并出现错误
  // 在插件或中间件中重定向到给定的路由。也可以直接调用它进行页面导航。
  // navigateTo (route: string | Route, options: { redirectCode: number, replace: boolean )
  // console.log(to, from);
  // const user_store = useUserPinia()
  // const model_store = useModelPinia()

  // if (!user_store.get_token) {
  //   model_store.set_model_name('login')
  //   return to.path === from.path ? navigateTo('/') : abortNavigation()
  // }
})
