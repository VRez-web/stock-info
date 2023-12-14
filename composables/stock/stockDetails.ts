import {useAPIFetch} from "@/composables/useAPIFetch";
import {ref} from 'vue'
import type {IStockDetails} from "~/types/stock/stock";

const stockNews = ref(null)
const stockInfo = ref<IStockDetails | null>(null)

export const useStock = (symbol: string) => {
  // const {data} = useAPIFetch(`/company-news?symbol=${symbol}`)
  const {data: stockInfoData, pending: stockInfoLoading} = useAPIFetch<IStockDetails>(`/stock/profile2?symbol=${symbol}`)
  stockInfo.value = stockInfoData.value

  return {
    stockNews,
    stockInfo,
    stockInfoLoading
  }
}
