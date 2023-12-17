<script setup lang="ts">
import type {INews} from "@/types/news";

interface IProps {
  news: INews
}

const props = defineProps<IProps>()

const newsSummary = computed(() => props.news.summary.slice(0, 400))
</script>

<template>
  <div class="col-12">
    <a
        :href="news.url"
        target="_blank"
        class="flex flex-column xl:flex-row xl:align-items-center p-2 gap-4"
    >
      <img class="w-12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
           :src="news.image"
           :alt="news.headline" />
      <div
          class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
        <div class="flex flex-column align-items-center sm:align-items-start">
          <h2 class="text-xl font-bold text-900">{{ news.headline }}</h2>
          <h3 class="text-sm">{{ newsSummary }}</h3>
          <div class="flex align-items-center gap-3 mt-2">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-tag"></i>
                  <span class="text-sm font-semibold">{{ news.source }}</span>
                </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
