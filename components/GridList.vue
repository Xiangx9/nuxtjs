<template>
  <ClientOnly>
    <GridLayout v-model:layout="layout" :responsive-layouts="layouts" v-bind="{ ...props.options }" @breakpoint-changed="breakpointChangedEvent">
      <template v-for="item in layout" :key="item.i">
        <GridItem :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :is-draggable="item.isDraggable">
          <slot v-bind="{ item }"></slot>
        </GridItem>
      </template>
    </GridLayout>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { GridLayout, GridItem } from 'grid-layout-plus'
interface Props {
  options?: any
  layouts: any
}

const props = withDefaults(defineProps<Props>(), {
  options: {
    // 定义栅格系统的列数，其值需为自然数
    colNum: 12,
    // 每行的高度，单位像素
    rowHeight: 30,
    // 标识栅格中的元素是否可拖拽。
    isDraggable: true,
    // 标识栅格中的元素是否可调整大小。
    isResizable: true,
    // 标识栅格中的元素是否可镜像反转。
    isMirrored: false,
    // 标识容器是否自动调整大小。
    autoSize: true,
    // 标识布局是否垂直压缩。
    verticalCompact: true,
    // 定义栅格中的元素边距
    margin: [20, 20],
    // 标识是否使用CSS属性
    useCssTransforms: true,
    // 标识布局是否为响应式。
    responsive: true
  },
  layouts: undefined
})

const layout = ref<any[]>(props.layouts['lg'])

const breakpointChangedEvent = (newBreakpoint, newLayout) => {
  // console.log('BREAKPOINT CHANGED breakpoint=', newBreakpoint, ', layout: ', newLayout)
}
</script>

<style lang="scss">
.vgl-layout {
  .vgl-item {
    cursor:move !important;
    .vgl-item__resizer {
      opacity: 0;
      transition: 0.3s all;
    }
    &:hover {
      .vgl-item__resizer {
        opacity: 0.5;
      }
    }
  }
}
</style>
