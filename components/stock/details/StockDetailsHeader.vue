<script setup lang="ts">
import {stockInfo, stockPrice} from "~/composables/stock/stockDetails";
import {useQuoteWebsockets} from "~/composables/stock/stockQuote";

interface IProps {
  symbol: string
}

const props = defineProps<IProps>()

useQuoteWebsockets(props.symbol)
</script>

<template>
  <div class="flex mb-2">
    <img v-if="stockInfo?.logo" :src="stockInfo.logo" alt="">
    <div class="ml-2">
      <h3 class="h3 font-bold">{{ stockInfo?.name }} ({{ stockInfo?.ticker }})</h3>
      <div class="text-sm"><span>{{ stockInfo?.exchange }}</span>
        <span class="pl-2">&#x2022; {{ stockInfo?.currency }}</span>
      </div>
    </div>
  </div>
  <div class="mb-5">
    <div>
      <h3 class="text-3xl font-bold">
        {{ stockPrice?.c }}
        <span class="text-lg text-green-500">{{ stockPrice?.d }} <span>({{ stockPrice?.dp }}%)</span></span>
      </h3>
    </div>
  </div>
</template>
