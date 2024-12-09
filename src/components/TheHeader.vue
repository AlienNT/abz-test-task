<script setup lang="ts">
import imagesPath from '@/helpers/imagesPath.ts'
import UIHelper from '@/helpers/UIHelper.ts'
import VLogo from '@/components/UI/VLogo.vue'
import VButton from '@/components/UI/VButton.vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { setStyleVariable } from '@/helpers/methodsHelper.ts'

const state = reactive({
  height: 0
})

function userButtonHandler() {
  console.log('clicked')
}
function signUpButtonHandler() {
  console.log('clicked')
}

const header = ref<HTMLElement>()

function getHeaderHeight(): number {
  return header.value?.offsetHeight || 0
}

function setHeaderHeight(height: number) {
  setStyleVariable('headerHeight', `${height}px`)
}

function resizeHandler() {
  const currentHeight = getHeaderHeight()

  if (currentHeight === state.height) {
    return
  }
  state.height = currentHeight
  setHeaderHeight(state.height)
}

onMounted(() => {
  state.height = getHeaderHeight()

  setHeaderHeight(state.height)
  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
  <header class="header" ref="header">
    <div class="container header__container">
      <div class="row">
        <div class="col">
          <VLogo :image="imagesPath.LOGO" />
        </div>
        <div class="col header__buttons">
          <VButton :title="UIHelper.USERS" @on-click="userButtonHandler" />
          <VButton :title="UIHelper.SIGN_UP" @on-click="signUpButtonHandler" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: rgb(255, 255, 255);
  position: sticky;
  top: 0;
  z-index: 3;

  .row {
    padding-top: 13px;
    padding-bottom: 13px;
    justify-content: space-between;
  }
}

.header__buttons {
  display: flex;
  gap: 10px;
}
</style>
