<template>
  <div class="container" :style="{ backgroundImage: `url(${bgcimg})` }">
    <NuxtLayout name="courent">
      <!-- <div><NuxtLink to="/welcome">welcome</NuxtLink></div>
      <div><NuxtLink to="/default">default</NuxtLink></div> -->
      <div class="name at-item">Welcome to <span>Xin's world</span></div>
      <GridList :layouts="list">
        <template #default="{ item }">
          <div class="w-full h-full bgc">
            <div class="text" v-if="item.html1">
              <span v-html="item.html1"></span>
              <span class="text_2">
                {{ item.text }}
              </span>
              <span v-html="item.html2"></span>
            </div>
            <div v-if="item.yiyan">
              <yiyan></yiyan>
            </div>
            <div v-if="item.weather">
              <weather></weather>
            </div>
            <div class="iconbox" v-for="i in item.wzlbAyy" @click="openPop(i)" :key="i">
              <span :class="i.icon" class="icon"></span>
              <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{{ i.mc }}</span>
            </div>
            <div class="social" v-if="item.IconList">
              <div v-for="i in item.IconList" @click="goDetail(i)" :key="i.iconurl">
                <span :class="i.iconurl" class="iconli"></span>
              </div>
            </div>
          </div>
        </template>
      </GridList>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
const userPinia = useUserPinia()

// 背景图片
const bgcimg = ref('/images/background1.webp')
let count = 1
const { pause, resume, isActive } = useIntervalFn(() => {
  count++
  if (count > 10) {
    count = 1
  }
  bgcimg.value = `/images/background${count}.webp`
  // Bgc()
}, 60000)

const router = useRouter();
const popRef = ref();
const openPop = (a) => {
  if (a.id === '6') {
    popRef.value.openClick();
  } else {
    router.push({
      path: `/${a.url}`,
    });
  }
};
//BliBli
const iconArr = ref([
  {
    name: 'github',
    iconurl: 'iconfont icon-github',
    url: 'https://github.com/',
    text: '去Github看看',
  },
  {
    name: 'TV',
    iconurl: 'iconfont icon-bilibili',
    url: 'https://www.bilibili.com/',
    text: '到B站看看~',
  },
]);
const goDetail = (e) => {
  // window.location.href = `${e.url}`; 在原页面打开
  window.open(`${e.url}`); // 打开新窗口
};
const wzlbAyy = [
  // { id: '1', icon: 'iconfont icon-wangyiyunyinle', mc: 'Music', url: 'Music' },
  { id: '1', icon: 'iconfont icon-ditu', mc: '个人简介', url: 'about' },
  { id: '2', icon: 'iconfont icon-biji', mc: '笔记', url: 'Note' },
  // {id: '3',icon: 'iconfont icon-shuyi_fanyi-36', mc: '翻译', url: 'Translate', },
  { id: '4', icon: 'iconfont icon-compass', mc: '起始页', url: 'Compass' },
  { id: '5', icon: 'iconfont icon-ditu', mc: 'Works', url: 'Map' },
  // { id: '6', icon: 'iconfont icon-yaoji', mc: 'Echarts' },
];
const wzlbAyy1 = [{ id: '1', icon: 'iconfont icon-ditu', mc: '个人简介', url: 'about' }]
const wzlbAyy2 = [{ id: '2', icon: 'iconfont icon-biji', mc: '学习笔记', url: 'Note' }]
const wzlbAyy3 = [{ id: '3', icon: 'iconfont icon-compass', mc: 'Baidu', url: 'Compass' },]
const wzlbAyy4 = [{ id: '4', icon: 'iconfont icon-ditu', mc: 'Works', url: 'Map' },]
//
const list = {
  xs: [
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '0', icon: '', html1: '<span class="text_1 iconfont icon-a-shuangyinhaozuo3x"></span> <span class="text_1">xiang&nbsp;xin&nbsp;</span> <br />', text: ' 一个人的小站，存于互联网的世界', html2: '<span class="text_1 iconfont icon-a-shuangyinhaoyou3x"></span>' },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '2', icon: '', yiyan: 'yiyan' },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '3', icon: '', weather: 'weather' },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '4', icon: '', wzlbAyy: wzlbAyy1 },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '5', icon: '', wzlbAyy: wzlbAyy2 },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '6', icon: '', wzlbAyy: wzlbAyy3 },
    { x: 0, y: 0, w: 4, h: 6, isDraggable: true, i: '7', icon: '', wzlbAyy: wzlbAyy4 },
  ],
  sm: [
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '0', icon: '', html1: '<span class="text_1 iconfont icon-a-shuangyinhaozuo3x"></span> <span class="text_1">xiang&nbsp;xin&nbsp;</span> <br />', text: ' 一个人的小站，存于互联网的世界', html2: '<span class="text_1 iconfont icon-a-shuangyinhaoyou3x"></span>' },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '2', icon: '', yiyan: 'yiyan' },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '3', icon: '', weather: 'weather' },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '4', icon: '', wzlbAyy: wzlbAyy1 },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '5', icon: '', wzlbAyy: wzlbAyy2 },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '6', icon: '', wzlbAyy: wzlbAyy3 },
    { x: 0, y: 0, w: 6, h: 4, isDraggable: true, i: '7', icon: '', wzlbAyy: wzlbAyy4 },
  ],
  md: [
    { x: 0, y: 0, w: 10, h: 6, isDraggable: true, i: '0', icon: '', html1: '<span class="text_1 iconfont icon-a-shuangyinhaozuo3x"></span> <span class="text_1">xiang&nbsp;xin&nbsp;</span> <br />', text: ' 一个人的小站，存于互联网的世界', html2: '<span class="text_1 iconfont icon-a-shuangyinhaoyou3x"></span>' },
    { x: 0, y: 0, w: 10, h: 6, isDraggable: true, i: '2', icon: '', yiyan: 'yiyan' },
    { x: 0, y: 0, w: 10, h: 6, isDraggable: true, i: '3', icon: '', weather: 'weather' },
    { x: 0, y: 0, w: 10, h: 4, isDraggable: true, i: '4', icon: '', wzlbAyy: wzlbAyy1 },
    { x: 0, y: 0, w: 10, h: 4, isDraggable: true, i: '5', icon: '', wzlbAyy: wzlbAyy2 },
    { x: 0, y: 0, w: 10, h: 4, isDraggable: true, i: '6', icon: '', wzlbAyy: wzlbAyy3 },
    { x: 0, y: 0, w: 10, h: 4, isDraggable: true, i: '7', icon: '', wzlbAyy: wzlbAyy4 },
  ],
  lg: [
    { x: 4, y: 0, w: 4, h: 4, isDraggable: true, i: '0', icon: '', html1: '<span class="text_1 iconfont icon-a-shuangyinhaozuo3x"></span> <span class="text_1">xiang&nbsp;xin&nbsp;</span> <br />', text: ' 一个人的小站，存于互联网的世界', html2: '<span class="text_1 iconfont icon-a-shuangyinhaoyou3x"></span>' },
    { x: 3, y: 1, w: 2, h: 6, isDraggable: true, i: '2', icon: '', yiyan: 'yiyan' },
    { x: 7, y: 1, w: 2, h: 6, isDraggable: true, i: '3', icon: '', weather: 'weather' },
    { x: 4, y: 2, w: 2, h: 4, isDraggable: true, i: '4', icon: '', wzlbAyy: wzlbAyy1 },
    { x: 6, y: 2, w: 2, h: 4, isDraggable: true, i: '5', icon: '', wzlbAyy: wzlbAyy2 },
    { x: 4, y: 2, w: 2, h: 4, isDraggable: true, i: '6', icon: '', wzlbAyy: wzlbAyy3 },
    { x: 6, y: 2, w: 2, h: 4, isDraggable: true, i: '7', icon: '', wzlbAyy: wzlbAyy4 },
    { x: 4, y: 3, w: 4, h: 2, isDraggable: true, i: '1', icon: '', IconList: iconArr },
  ]
}

onMounted(() => {
})
</script>
<style lang="scss" scoped></style>
