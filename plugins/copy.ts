export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('copy', {
    created(el, binding, vnode, prevVnode) {
      // console.log('created', el, binding);
    },
    beforeMount(el, binding, vnode, prevVnode) {
      // console.log('beforeMount', el, binding);
    },
    mounted(el, binding, vnode, prevVnode) {
      // console.log('mounted', el, binding, document);
      el.$value = binding.value
      el.handler = () => {
        if (!el.$value) {
          // 值为空的时候，给出提示。可根据项目UI仔细设计
          return console.log('无复制内容')
        }
        // 动态创建 textarea 标签
        const textarea: any = document.createElement('textarea')
        // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
        textarea.readOnly = 'readonly'
        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        // 将要 copy 的值赋给 textarea 标签的 value 属性
        textarea.setAttribute('value', el.$value)
        textarea.value = el.$value
        // 将 textarea 插入到 点击元素 中  // 弹出层会自动聚焦 所以复制失效
        el.appendChild(textarea)
        // 选中值并复制
        textarea.select()
        const result = document.execCommand('Copy')
        if (result) alert('Copy link succeeded')
        el.removeChild(textarea)
      }
      // 绑定点击事件，就是所谓的一键 copy 啦
      el.addEventListener('click', el.handler)
    },
    beforeUpdate(el, binding, vnode, prevVnode) {
      // console.log('beforeUpdate', el, binding);
    },
    updated(el, binding, vnode, prevVnode) {
      // console.log('updated', el, binding);
      el.$value = binding.value
    },
    beforeUnmount(el, binding, vnode, prevVnode) {
      // console.log('beforeUnmount', el, binding);
      el.removeEventListener('click', el.handler)
    },
    unmounted(el, binding, vnode, prevVnode) {
      // console.log('unmounted', el, binding);
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})
