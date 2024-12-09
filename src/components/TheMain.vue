<script setup lang="ts">
import UIHelper from '@/helpers/UIHelper.ts'
import { computed, onMounted } from 'vue'

import VTitle from '@/components/UI/VTitle.vue'
import VDescription from '@/components/UI/VDescription.vue'
import VButton from '@/components/UI/VButton.vue'
import UsersList from '@/components/users/UsersList.vue'

import { useRequest } from '@/composables/useRequest.ts'
import useUsersStore from '@/store/usersStore.ts'

// import VForm from '@/components/form/VForm.vue'

const { fetchUsers } = useRequest()
const { users, page, totalPages, setUsers, setUsersPage, setUsersTotalPage } = useUsersStore()

const isMorePages = computed(() => {
  return page.value < totalPages.value
})

onMounted(() => {
  if (!users.value.length) {
    getUsers(page.value).then(() => console.log({ page: page.value, totalPages: totalPages.value }))
  }
})

async function getUsers(page: number) {
  fetchUsers({
    page,
    count: 6,
  }).then((response) => {
    const { users, page, total_pages } = response.data
    setUsersPage(page)
    setUsersTotalPage(total_pages)
    setUsers(users)
  })
}

function showMoreHandler() {
  console.log({ page: page.value, totalPages: totalPages.value })
  if (isMorePages.value) {
    getUsers(page.value + 1)
  }
}
</script>

<template>
  <main class="main">
    <section class="section section-1">
      <div class="container">
        <div class="content-wrapper">
          <VTitle tag-name="h1" value="Test assignment for front-end developer" />
          <VDescription
            value="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
          />
          <VButton :title="UIHelper.SIGN_UP" />
        </div>
      </div>
    </section>
    <section class="section section-2">
      <div class="container" id="users">
        <VTitle value="Working with GET request" />
        <UsersList :users="users" />
        <VButton
          class="show-more-button"
          :title="UIHelper.SHOW_MORE"
          :disabled="!isMorePages"
          @on-click="showMoreHandler"
        />
      </div>
    </section>
    <section class="section section-3">
      <div class="container">
        <VTitle value="Working with POST request" />
<!--        <VForm/>-->
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/css/variables/media';
.main {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow-y: auto;
}

.section {
  flex: 0 1 100%;
  min-height: calc(var(--height) - var(--headerHeight));
  display: flex;
  flex-direction: column;
  background: rgb(248, 248, 248);
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-property: all;
}

.section-1 {
  color: white;

  .container {
    height: 100%;
    display: flex;
    background-image: url('../../public/images/background.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;


    @media #{media.$isMouseDevice} {
      background-attachment: fixed;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .content-wrapper {
    max-width: 380px;
    margin: auto;
    position: relative;
    z-index: 1;
  }

  .title {
    margin-bottom: 21px;
  }

  .description {
    margin-bottom: 32px;
  }

  .button-wrapper {
    margin: 0 auto;
  }
}

.section-2 {
  padding-top: 140px;

  .title {
    margin-bottom: 50px;
  }

  .users-list {
    margin-bottom: 50px;
  }

  .show-more-button {
    margin-left: auto;
    margin-right: auto;
  }
}

.section-3 {
  padding-top: 140px;
  padding-bottom: 140px;
}
</style>
