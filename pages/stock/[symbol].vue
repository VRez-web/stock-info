<script setup lang="ts">
import TabOverview from "@/components/stock/details/tabs/TabOverview.vue"
import TabFinancials from "@/components/stock/details/tabs/TabFinancials.vue";
import {useRoute} from "#app";
import type {Component} from "vue"
import {shallowRef} from "vue";
import {useStock} from "~/composables/stock/stockDetails";

interface ITabs {
  title: string
  name: Component
}

const route = useRoute()

const {stockInfo} = useStock(route.params.symbol as string)

const tabs: ITabs[] = [
  {title: "Overview", name: TabOverview},
  {title: "Financials", name: TabFinancials}
]
const activeTab = shallowRef<Component>(TabOverview)
</script>

<template>
  <section class="pt-2">
    <div>
      <h3 class="h3 font-bold mb-2">{{ stockInfo?.name }}</h3>
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
  </section>
</template>
