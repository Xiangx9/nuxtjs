<template>
  <div v-for="item in text" :key="item" class="yiyan at-itemleft">
    <div class="hitokoto">
      {{ item.hitokoto }}
    </div>
    <div class="from">
      --【 {{ item.from }} 】
    </div>
  </div>
</template>
<script setup>
import { useIntervalFn } from '@vueuse/core';
let text = ref([{
  hitokoto: '永远相信美好的事即将发生',
  from: '雷军',
}])
const YiYan = () => {
  const { data: res } = useFetch('https://api.xygeng.cn/one')
  // console.log(res.value);
  let newData = [
    {
      hitokoto: res.value.data.content,
      from: res.value.data.origin,
    },
  ];
  text.value = newData
}
const { pause, resume, isActive } = useIntervalFn(() => {
  YiYan()
}, 30000)
</script>
<style lang="scss" scoped>
.yiyan {
  cursor: pointer !important;

  .hitokoto {
    font-size: 25px;
    margin-bottom: 20px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .from {
    float: right;
    font-size: 20px;
  }
}
</style>