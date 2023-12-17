<script setup lang="ts">
import TabOverview from "@/components/stock/details/tabs/TabOverview.vue"
import TabFinancials from "@/components/stock/details/tabs/TabFinancials.vue";
import {useRoute} from "#app";
import type {Component} from "vue"
import {shallowRef} from "vue";
import {useStock, stockInfo, stockNews, stockInfoLoading, stockNewsLoading} from "~/composables/stock/stockDetails";

interface ITabs {
  title: string
  name: Component
}

const route = useRoute()

useStock(route.params.symbol as string)

const tabs: ITabs[] = [
  {title: "Overview", name: TabOverview},
  {title: "Financials", name: TabFinancials}
]
const activeTab = shallowRef<Component>(TabOverview)
</script>

<template>
  <section class="pt-2">
    <div v-if="stockInfoLoading">...loading</div>
    <div v-else>
      <div class="flex mb-2">
        <img v-if="stockInfo?.logo" :src="stockInfo.logo" alt="">
        <div class="ml-2">
          <h3 class="h3 font-bold">{{ stockInfo?.name }} ({{ stockInfo?.ticker }})</h3>
          <div class="text-sm"><span>{{ stockInfo?.exchange }}</span>
            <span class="pl-2">&#x2022; {{ stockInfo?.currency }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-2 pb-1 border-bottom-1">
        <PrimeButton
            v-for="({title, name}, i) in tabs"
            :key="i"
            label="Secondary"
            severity="secondary"
            :class="{'bg-bluegray-100':activeTab === name}"
            :pt="{
                root: { class: 'bg-bluegray-50'}
               }"
            text
            @click="activeTab = name"
        >
          {{ title }}
        </PrimeButton>
      </div>
      <component :is="activeTab" />
    </div>
    <div class="mt-5">
      <div v-if="stockNewsLoading">...loading</div>
      <h3 v-else class="h3 font-bold">Company News</h3>
      <div>
        <NewsCard v-for="newsItem in stockNews" :key="newsItem.id" :news="newsItem" />
      </div>
    </div>
  </section>
</template>
