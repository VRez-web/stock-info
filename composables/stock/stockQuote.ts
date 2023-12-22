import {stockPrice} from "~/composables/stock/stockDetails";

export const useQuoteWebsockets = (symbol: string) => {
  if (!process.client) return
  const config = useRuntimeConfig()
  const socket = new WebSocket(`wss://ws.finnhub.io?token=${config.public.token}`)

  socket.onopen = () => {
    socket.send(JSON.stringify({type: 'subscribe', symbol: symbol}));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type !== 'trade') return
    const updPrice = useDebounceFn(() => {
      stockPrice.value.pp = stockPrice.value?.c
      stockPrice.value.c = +data.data[0].p.toFixed(2)
    }, 1000)
    updPrice()


    const priceChangePercent = (stockPrice.value?.c - stockPrice.value?.pp) * 100
    stockPrice.value.dp = priceChangePercent.toFixed(2)
    stockPrice.value.d = (stockPrice.value?.c - stockPrice.value?.pp).toFixed(2)
  };
}
