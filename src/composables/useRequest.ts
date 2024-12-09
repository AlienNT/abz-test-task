import type { PositionsResponseInterface, TokenResponseInterface, UserResponseInterface } from '@/types/response.ts'
import { useBasicRequest } from '@/composables/useBasicRequest.ts'

interface FetchUsersParams {
  page?: number,
  count?: number
}

export function useRequest() {
  const { apiRequest, loading, uploadProgress, downloadProgress } = useBasicRequest()

  async function fetchUsers({ page = 1, count = 6 }: FetchUsersParams) {
    console.log({page, count})
    return await apiRequest<UserResponseInterface, null>({
      method: 'GET',
      url: `/users?page=${page}&count=${count}`,
    })
  }

  async function fetchToken() {
    return await apiRequest<TokenResponseInterface, null>({
      method: 'GET',
      url: '/token',
    })
  }

  async function fetchPositions() {
    return await apiRequest<PositionsResponseInterface, null>({
      method: 'GET',
      url: '/positions',
    })
  }

  return {
    apiRequest,
    loading,
    uploadProgress,
    downloadProgress,
    fetchUsers,
    fetchToken,
    fetchPositions
  }
}
