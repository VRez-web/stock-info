<script setup lang="ts">
import NewsCardSkeleton from "~/components/NewsCardSkeleton.vue";
import type {INews} from "~/types/news";

const {data: news, pending} = await useAPIFetch<INews[]>('news?category=general', {
  transform: (news) => news.slice(0, 20)
})

</script>

<template>
  <NewsCardSkeleton v-if="pending" />
  <HomeNews v-if="news" :news="news" />
</template>
