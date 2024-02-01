<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <UNotifications /> -->
    <!-- <ClientOnly>
      <div class="fixed bottom-1/2 right-5 z-50">
        <UButton variant="solid" @click="isDark = !isDark">
          <template #leading>
            <UIcon v-if="isDark" name="i-line-md-moon-loop" size="20" dynamic />
            <UIcon v-else name="i-line-md-sunny-outline-loop" size="20" dynamic />
          </template>
        </UButton>
      </div>
    </ClientOnly> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style lang="scss" scoped></style>
