<script setup lang="ts">
interface UserAvatarPropsInterface {
  image: string
  alt: string
  width?: number
  height?: number
}

defineProps<UserAvatarPropsInterface>()
</script>

<template>
  <div class="user-avatar">
    <div class="user-avatar__wrapper">
      <img class="user-avatar__img" :src="image" :alt="alt" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-avatar {
  width: 70px;
  height: 70px;
}

.user-avatar__wrapper {
  position: relative;
  width: 0;
  height: 0;
  padding-top: 100%;
  padding-left: 100%;
  display: flex;
}

.user-avatar__img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
