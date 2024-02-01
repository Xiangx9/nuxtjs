<template>
  <div>
    <NuxtLayout name="courent">
      <div><NuxtLink to="/welcome">welcome</NuxtLink></div>
      <div><NuxtLink to="/default">default</NuxtLink></div>
      <div>
        <UButton @click="userPinia.setNanoid()">{{ userPinia.getNanoid }}</UButton>
      </div>

      <div>
        <UButton @click="onShow">图形验证</UButton>
        <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
      </div>

      <GridList :layouts="list">
        <template #default="{ item }">
          <div class="w-full h-full bg-white">
            <div class="w-20 h-20" v-html="url"></div>
            {{ item }}
          </div>
        </template>
      </GridList>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// https://github.com/javaLuo/vue-puzzle-vcode/blob/master/README3.md
// vue3-puzzle-vcode@1.0.15-nuxt
import Vcode from 'vue3-puzzle-vcode'
const userPinia = useUserPinia()

/** 图形验证 */
const isShow = ref(false)

const onShow = () => {
  isShow.value = true
}

const onClose = () => {
  isShow.value = false
}

const onSuccess = () => {
  console.log('验证成功')
  onClose() // 验证成功，需要手动关闭模态框
}

const list = {
  xs: [
    { x: 0, y: 0, w: 4, h: 8, isDraggable: true, i: '0', icon: '', component: 'OperateWaitProjectCard' },
    { x: 0, y: 8, w: 4, h: 4, isDraggable: true, i: '1', icon: '', component: 'OperateUserCard' }
  ],
  sm: [
    { x: 0, y: 0, w: 6, h: 8, isDraggable: true, i: '0', icon: '', component: 'OperateWaitProjectCard' },
    { x: 0, y: 8, w: 6, h: 4, isDraggable: true, i: '1', icon: '', component: 'OperateUserCard' }
  ],
  md: [
    { x: 0, y: 0, w: 6, h: 8, isDraggable: true, i: '0', icon: '', component: 'OperateWaitProjectCard' },
    { x: 6, y: 0, w: 4, h: 4, isDraggable: true, i: '1', icon: '', component: 'OperateUserCard' }
  ],
  lg: [
    { x: 0, y: 0, w: 8, h: 8, isDraggable: true, i: '0', icon: '', component: 'OperateWaitProjectCard' },
    { x: 8, y: 0, w: 4, h: 4, isDraggable: true, i: '1', icon: '', component: 'OperateUserCard' }
  ]
}

const { $encodeData, $rendererRect } = useNuxtApp()
const url = ref()
onMounted(() => {
  const qrcode = $encodeData({
    text: '这是一个二维码',
    correctLevel: 0
  })
  const A1 = $rendererRect(qrcode)
  url.value = A1
  // `data:image/svg+xml;base64,${}`
})
</script>
<style lang="scss" scoped></style>
