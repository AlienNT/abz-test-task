<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheMain from '@/components/TheMain.vue'
import { onMounted, onUnmounted } from 'vue'
import { getViewportSize, setStyleVariable } from '@/helpers/methodsHelper.ts'

function setViewportSize() {
  const { width, height } = getViewportSize()

  setStyleVariable('width', `${width}px`)
  setStyleVariable('height', `${height}px`)
}

onMounted(() => {
  setViewportSize()
  // addEventListener('resize', setViewportSize)
})

onUnmounted(() => {
  // removeEventListener('resize', setViewportSize)
})
</script>

<template>
  <TheHeader />
  <TheMain />
</template>

<style scoped></style>
