<script setup lang="ts">
interface PhonePropsInterface {
  value: string;
  title?: string;
  target?: '_blank' | '_self'
}

withDefaults(defineProps<PhonePropsInterface>(), {
  target: '_self'
})
</script>

<template>
<div class="phone">
  <a
    :href="`tel:${value}`"
    :target="target"
  >
    {{title || value}}
  </a>
</div>
</template>

<style scoped>

</style>
