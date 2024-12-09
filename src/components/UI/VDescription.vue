<script setup lang="ts">
import { computed } from 'vue'

interface DescriptionPropsInterface {
  value: string
  color?: string
  fonsSize?: string
}

const props = defineProps<DescriptionPropsInterface>()

const styles = computed(() => [
  props.color ? `color: ${props.color}` : '',
  props.fonsSize ? `font-size: ${props.fonsSize}` : '',
].join('; '))
</script>

<template>
  <div class="description" :style="styles">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
.description {
  font-size: 16px;
  text-align: center;
  line-height: 26px;
}
</style>
