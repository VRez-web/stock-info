import type {StringOrNull} from '@/types/base'

export interface INews {
  category: string
  datetime: number
  headline: string
  id: number
  image: string
  related: StringOrNull
  source: string
  summary: string
  url: string
}
