<script setup lang="ts">
import type {INews} from "~/types/news";

interface IProp {
  news: INews[],
}

defineProps<IProp>()
</script>

<template>
  <PrimeDataView :value="news">
    <template #list="newsItem">
      <NewsCard :news="newsItem.data" />
    </template>
  </PrimeDataView>
</template>
