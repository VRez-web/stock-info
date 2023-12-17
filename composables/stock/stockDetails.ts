import {useAPIFetch} from "@/composables/useAPIFetch";
import {ref} from 'vue'
import type {IStockDetails} from "~/types/stock/stock";
import type {INews} from "~/types/news";

export const stockNews = ref<INews[] | null>(null)
export const stockInfo = ref<IStockDetails | null>(null)
export const stockInfoLoading = ref<boolean>(true)
export const stockNewsLoading = ref<boolean>(true)

export const useStock = async (symbol?: string) => {
  const currentDate = new Date()
  const twoWeeksAgo = new Date()
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)

  const dateFormatter = new Intl.DateTimeFormat('en',
    {year: 'numeric', month: '2-digit', day: '2-digit'})
  const fromParts = dateFormatter.formatToParts(twoWeeksAgo);
  const toParts = dateFormatter.formatToParts(currentDate);

  const fromDate = `${fromParts[4].value}-${fromParts[0].value}-${fromParts[2].value}`;
  const toDate = `${toParts[4].value}-${toParts[0].value}-${toParts[2].value}`;
  const {data: stockNewsData, pending: newsLoading}
    = await useAPIFetch<INews[]>(`/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}`,
    {transform: (news) => news.slice(0, 20)})
  stockNews.value = stockNewsData.value
  stockNewsLoading.value = newsLoading.value

  const {
    data: stockInfoData,
    pending: infoLoading
  } = await useAPIFetch<IStockDetails>(`/stock/profile2?symbol=${symbol}`)
  stockInfo.value = stockInfoData.value
  stockInfoLoading.value = infoLoading.value
}
