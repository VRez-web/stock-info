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
      <div class="col-12">
        <a
            :href="newsItem.data.url"
            target="_blank"
            class="flex flex-column xl:flex-row xl:align-items-center p-2 gap-4"
        >
          <img class="w-12 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
               :src="newsItem.data.image"
               :alt="newsItem.data.headline" />
          <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div class="flex flex-column align-items-center sm:align-items-start">
              <h2 class="text-xl font-bold text-900">{{ newsItem.data.headline }}</h2>
              <h3 class="text-sm">{{ newsItem.data.summary }}</h3>
              <div class="flex align-items-center gap-3 mt-2">
                <span class="flex align-items-center gap-2">
                  <i class="pi pi-tag"></i>
                  <span class="text-sm font-semibold">{{ newsItem.data.source }}</span>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </template>
  </PrimeDataView>
</template>
