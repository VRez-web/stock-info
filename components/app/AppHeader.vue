<script setup lang="ts">
import AppSearch from "~/components/app/search/AppSearch.vue";
import type {IMarketStatus} from "~/types/marketStatus";

const marketStatus = useState<IMarketStatus>('market-status')

const isMarketOnline = computed(() => marketStatus.value?.isOpen ? 'online' : 'offline')
</script>

<template>
  <PrimeToolbar class="fixed top-0 w-full">
    <template #start>
      <nuxt-link :to="{name:'index'}" class="logo">
        <span>Stock</span>Info
      </nuxt-link>
      <AppSearch />
    </template>
    <template #end>
      <div>
        <p>Market: {{ isMarketOnline }}</p>
      </div>
    </template>
  </PrimeToolbar>
</template>

<style lang="scss" scoped>
.logo {
  font-size   : 1.5rem;
  font-weight : bold;

  span {
    color : #5472d4;
  }
}
</style>

