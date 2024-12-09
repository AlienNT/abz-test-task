<script setup lang="ts">
import { computed } from 'vue'

interface LogoPropsInterface {
  image: string
  width?: number
  height?: number
  alt?: string
}

const props = withDefaults(defineProps<LogoPropsInterface>(), {
  alt: 'logo image',
})

const styles = computed(() => [
  props.height ? `height: ${props.height}px` : '',
  props.height ? `width: ${props.width}px` : '',
].join('; '))
</script>

<template>
  <div
    class="logo"
    :style="styles"
  >
    <img
      class="logo__image"
      :src="image"
      :alt="alt"
    />
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
}
.logo__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
