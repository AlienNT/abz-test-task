<script setup lang="ts">
import UserAvatar from '@/components/users/UserAvatar.vue'
import UserField from '@/components/users/UserField.vue'
import type { UserInterface } from '@/types/user.ts'

interface UserPropsInterface {
  userData: UserInterface
}

defineProps<UserPropsInterface>()
</script>

<template>
  <div class="user-list-item">
    <div class="user-fields">
      <UserAvatar
        class="user-fields__avatar"
        :image="userData.photo"
        :alt="userData.name + ' photo'"
      />
      <UserField class="user-fields__name" :value="userData.name" type="text" />
      <UserField class="user-fields__position" :value="userData.position" type="text" />
      <UserField class="user-fields__email" :value="userData.email" type="email" />
      <UserField class="user-fields__phone" :value="userData.phone" type="phone" />
    </div>
  </div>
</template>

<style scoped>
.user-list-item {
  max-width: 370px;
}

.user-fields {
  padding: 20px;
  border-radius: 10px;
  background: rgb(255, 255, 255);
  height: 100%;
  text-align: center;
}

.user-fields__name,
.user-fields__avatar {
  margin-bottom: 20px;
}

.user-fields__avatar {
  margin-left: auto;
  margin-right: auto;
}

</style>
