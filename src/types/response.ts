import type { UserInterface } from '@/types/user.ts'

type UserLinksType = {
  next_url: string | null
  prev_url: string | null
}

export interface RequestResponseInterface<Response> {
  data: Response
  status: number
}

export interface UserResponseInterface {
  count: number
  links: UserLinksType
  page: number
  success: boolean
  total_pages: number
  total_users: number
  users: UserInterface[]
}

export interface TokenResponseInterface {
  token: string
  success: boolean
}

export interface PositionResponseInterface {
  id: number
  name: string
}

export interface PositionsResponseInterface {
  success: boolean
  positions: PositionResponseInterface[]
}
