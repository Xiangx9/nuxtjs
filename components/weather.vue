<template>
  <div class="weather at-itemright ">
    <div class="week">
      <div>
        {{ text.info.date }}
      </div>
      <div>
        {{ text.info.week }}
      </div>
    </div>
    <div class="time">{{ formatted }}</div>
    <div class="city">
      <span> {{ text.city }}</span>
      <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span> {{ text.info.type }}</span>
      <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>{{ text.info.low }} - {{ text.info.high }}</span>
    </div>
    <div>
      {{ text.info.tip }}
    </div>
  </div>
</template>
<script setup>
import { useNow, useDateFormat, useIntervalFn } from '@vueuse/core';
const formatted = useDateFormat(useNow(), 'HH:mm:ss')

//天气
let text = ref({
  info:{}
})
const weather = async () => {
  const { data: res } = await useFetch('https://api.vvhan.com/api/weather?city=长沙市')
  text.value = res.value
  // console.log(res.value);
}
const { pause, resume, isActive } = useIntervalFn(() => {
  weather()
  pause()
}, 100)
</script>
<style lang="scss" scoped>
.weather {
  cursor: pointer !important;
  // width: 12vw;
  text-align: center;
}

.week {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.time {
  font-size: 40px;
  margin: 10px 0;
}

.city {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>