<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

interface UserFieldPropsInterface {
  value: string
  type?: 'text' | 'email' | 'phone',
  target?: '_blank' | '_self',
  title?: string,
  className?: string,
}

const props = withDefaults(defineProps<UserFieldPropsInterface>(), {
  type: 'text',
})

const component = computed(() => {
  switch (props.type) {
    case 'email':
      return defineAsyncComponent(() => import('../UI/VEmail.vue'))
    case 'phone':
      return defineAsyncComponent(() => import('../UI/VPhone.vue'))
    case 'text':
      return defineAsyncComponent(() => import('../UI/VText.vue'))
    default:
      return defineAsyncComponent(() => import('../UI/VText.vue'))
  }
})
</script>

<template>
  <component
    class="user-field"
    :class="className"
    :is="component"
    :value="value"
    :title="title"
    :target="target"
  />
</template>

<style scoped lang="scss">
.user-field {
  text-wrap: wrap;
  word-wrap: break-word;
}
</style>
