<script setup lang="ts">
import {useAPIFetch} from "~/composables/useAPIFetch";
import type {IMarketStatus} from "~/types/marketStatus";

const {data: marketStatus} = useAPIFetch<IMarketStatus>('stock/market-status?exchange=US')
useState('market-status', () => marketStatus)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
