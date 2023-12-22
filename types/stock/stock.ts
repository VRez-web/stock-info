import type {StringOrNull} from "~/types/base";

interface IMetric {
  '10DayAverageTradingVolume': number
  "52WeekHigh": number
  "52WeekLow": number
  "52WeekLowDate": string
  "52WeekPriceReturnDaily": number
  beta: number
}

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

export interface IStockFinance {
  series: unknown
  metric: IMetric
  metricType: "all"
  symbol: string
}

/*
c - Current price
d - Change
dp - Percent change
h - High price of the day
l - Low price of the day
o - Open price of the day
pc - Previous close price
pp - prev price(its not from API)
 */
export interface IStockPrice {
  c: number
  h: number
  d: number
  dp: number
  l: number
  o: number
  pc: number
  t: number
  pp?: number
}
