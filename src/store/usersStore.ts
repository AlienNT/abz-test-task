import { computed, reactive } from 'vue'
import type { UserInterface } from '@/types/user.ts'

const state = reactive({
  users: [] as UserInterface[],
  page: 1 as number,
  totalPages: undefined as unknown as number,
})

export default function useUsersStore() {
  const users = computed(() => {
    return state.users
  })

  const page = computed(() => {
    return state.page
  })

  const totalPages = computed(() => {
    return state.totalPages
  })

  function setUsers(users: UserInterface[]) {
    state.users = [...state.users, ...users]
  }

  function resetUsers() {
    state.users = []
  }

  function setUsersPage(page: number) {
    state.page = page
  }

  function setUsersTotalPage(totalPages: number) {
    console.log('setUsersTotalPage', totalPages)
    state.totalPages = totalPages
  }

  return {
    users,
    page,
    totalPages,
    setUsers,
    resetUsers,
    setUsersPage,
    setUsersTotalPage,
  }
}
