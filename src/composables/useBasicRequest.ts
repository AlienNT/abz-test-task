import { computed, reactive } from 'vue'
import axios, { type AxiosProgressEvent } from 'axios'
import apiConfig from '@/config/apiConfig.ts'
import { useTokenStore } from '@/store/tokenStore.ts'
import type { TokenResponseInterface } from '@/types/response.ts'

export function useBasicRequest() {
  const { token, setToken, resetToken } = useTokenStore()

  const state = reactive({
    loading: false,
    uploadProgress: <AxiosProgressEvent>{},
    downloadProgress: <AxiosProgressEvent>{},
  })

  const loading = computed(() => {
    return state.loading
  })
  const uploadProgress = computed(() => {
    return state.uploadProgress
  })
  const downloadProgress = computed(() => {
    return state.downloadProgress
  })

  async function apiRequest<Response, Payload>({
    method,
    url,
    payload,
  }: {
    method: string
    url: string
    payload?: Payload
  }) {
    state.loading = true

    if (method === 'POST' && !token.value) {
      await apiRequest<TokenResponseInterface, null>({
        method: 'GET',
        url: '/token',
      }).then((response) => {
        setToken(response.data.token)
      })
    }
    return axios({
      method,
      url,
      baseURL: apiConfig.baseURL,
      headers: {
        Authorization: 'Bearer' + token.value,
      },
      onDownloadProgress: (progressEvent) => {
        state.uploadProgress = progressEvent
      },
      onUploadProgress: (progressEvent) => {
        state.downloadProgress = progressEvent
      },
      data: payload,
    })
      .then((response) => {
        if (method === 'POST') {
          resetToken()
        }
        return {
          data: response.data as Response,
          status: response.status,
        }
      })
      .finally(() => (state.loading = false))
  }

  return {
    loading,
    uploadProgress,
    downloadProgress,
    apiRequest,
  }
}
