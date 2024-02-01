<template>
  <div ref="lineRef" class="h-full w-full"></div>
</template>

<script setup lang="ts">
import { type ECOption, useEcharts } from '~/hooks/echart'

const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending'],

    orient: 'vertical',
    left: 'left'
  },
  radar: {
    // shape: 'circle',
    indicator: [{ name: 'Sales' }, { name: 'Administration' }, { name: 'Information' }, { name: 'Customer Support' }, { name: 'Development' }, { name: 'Marketing' }]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
})
const { domRef: lineRef } = useEcharts(lineOptions)
</script>
