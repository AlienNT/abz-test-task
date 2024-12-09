<script setup lang="ts">
interface TextPropsInterface {
  value: string
}
defineProps<TextPropsInterface>()
</script>

<template>
<div class="text">{{value}}</div>
</template>

<style scoped>

</style>
