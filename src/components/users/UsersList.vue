<script setup lang="ts">
import type { UserInterface } from '@/types/user.ts'
import UsersListItem from '@/components/users/UsersListItem.vue'

interface UsersListPropsInterface {
  users: UserInterface[]
}

defineProps<UsersListPropsInterface>()
</script>

<template>
  <ul class="users-list">
    <template v-for="user in users" :key="user.id">
      <UsersListItem :user-data="user" />
    </template>
  </ul>
</template>

<style scoped lang="scss">
@use '../../assets/css/variables/media';
@use '../../assets/css/helper';

.users-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: media.$userListGapLarge;
  transition: gap .2s ease;

  @media #{media.$screenDesktop} {
    gap: media.$userListGapSmall;
  }
}

.user-list-item {
  width: helper.columnSize(3, media.$userListGapLarge);
  max-width: 370px;
  min-width: 280px;

  @media #{media.$screenDesktop} {
    max-width: 282px;
  }
  @media #{media.$screenTablet} {
    max-width: 344px;
    width: helper.columnSize(2, media.$userListGapSmall);
  }
  @media #{media.$screenMobile} {
    max-width: 348px;
    width: 100%;
  }
}
</style>
