import type {StringOrNull} from "~/types/base";

export interface IStockDetails {
  country: string
  currency: string
  exchange: string
  ipo: string
  marketCapitalization: number
  name: string
  phone: number
  shareOutstanding: number
  ticker: string
  weburl: string
  logo: StringOrNull
  finnhubIndustry: string
}
