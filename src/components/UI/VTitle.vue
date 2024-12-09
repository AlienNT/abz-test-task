<script setup lang="ts">
import { computed } from 'vue'

interface TitlePropsInterface {
  value: string
  color?: string
  fontSize?: string
  tagName?: string
}

const props = withDefaults(defineProps<TitlePropsInterface>(), {
  tagName: 'div',
})

const styles = computed(() => [
  props.color ? `color: ${props.color}` : '',
].join('; '))
</script>

<template>
 <component
   :is="tagName"
   :style="styles"
   class="title"
 >
   {{value}}
 </component>
</template>

<style scoped>
.title {
  width: 100%;
  font-size: 40px;
  text-align: center;
  line-height: 40px;
}
</style>
