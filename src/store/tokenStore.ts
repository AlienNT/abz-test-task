import { computed, reactive} from 'vue'

const state = reactive({
  token: null as string | null,
})

export function useTokenStore() {
  const token = computed(() => {
    return state.token
  })

  function setToken(token: string) {
    state.token = token
  }

  function resetToken() {
    state.token = null
  }
  return {
    token,
    setToken,
    resetToken,
  }
}
