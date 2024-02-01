<template>
  <div class="contain">
    <div class="time">{{ formatted }}</div>
  </div>
</template>

<script setup>
import { useNow, useDateFormat } from '@vueuse/core'
const formatted = useDateFormat(useNow(), 'HH:mm:ss')
</script>

<style scoped lang="scss">
.contain {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .time {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 42px;
    color: #000;
    letter-spacing: 3px;
    margin: 0 auto;
    padding-top: 100px;
  }



}
</style>
