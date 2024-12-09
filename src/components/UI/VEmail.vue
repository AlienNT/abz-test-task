<script setup lang="ts">
interface EmailPropsInterface {
  value: string;
  title?: string;
  target?: '_blank' | '_self'
}

withDefaults(defineProps<EmailPropsInterface>(), {
  target: '_self'
})
</script>

<template>
<div class="email">
  <a
    :target="target"
    :href="`mailto:${value}`"
  >
    {{title || value}}
  </a>
</div>
</template>

<style scoped>

</style>
