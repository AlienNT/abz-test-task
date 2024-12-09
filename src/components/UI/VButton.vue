<script setup lang="ts">
interface ButtonPropsInterface {
  type?: 'button' | 'submit'
  disabled?: boolean
  title?: string
}

withDefaults(defineProps<ButtonPropsInterface>(), {
  type: 'button',
  title: 'Button',
})

const emit = defineEmits(['onClick'])
</script>

<template>
  <div class="button-wrapper">
    <button
      class="button"
      :type="type"
      :disabled="disabled"
      @click="emit('onClick')"
    >
      <span>{{title}}</span>
    </button>
  </div>
</template>

<style scoped>
.button-wrapper {
  min-width: 100px;
  width: fit-content;
  min-height: 34px;
  display: flex;
}
.button {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  text-align: center;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 80px;
  background: rgb(244, 224, 65);
  padding: 0 15px;
  &:disabled {
    background: rgb(180, 180, 180);
  }
  span {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
