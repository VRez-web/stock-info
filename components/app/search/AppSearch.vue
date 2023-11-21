<script setup lang="ts">
import {useAPIFetch} from "@/composables/useAPIFetch";
import {useDebounceFn} from "@vueuse/core";
import {ref} from 'vue'
import type {ISearchResult} from "~/types/search";

const search = ref('')
const searchResults = ref<ISearchResult | null>(null)
const isLoadingSearchResult = ref(false)
const isShowSearchResult = ref(false)

const getSearchResult = useDebounceFn(async () => {
  isLoadingSearchResult.value = true
  const {data} = await useAPIFetch<ISearchResult>(`/search?q=${search.value}`, {
    server: false,
  })
  searchResults.value = data.value
}, 1000)

watch(search, () => {
  if (!search.value.length) return
  getSearchResult()
})

watch(searchResults, () => {
  isLoadingSearchResult.value = false
})

const closeSearchResult = (isClose:boolean) => isShowSearchResult.value = isClose
</script>

<template>
  <form class="search relative" @submit.prevent>
    <div class="search-wrapper  p-input-icon-left relative">
      <i class="pi pi-search" />
      <PrimeInputText
          v-model.trim="search"
          placeholder="Company or stock symbol..."
          size="small"
          class="search-input pr-5"
          @focusin="isShowSearchResult = true"
      />
      <i v-if="isLoadingSearchResult" class="pi pi-spin pi-spinner absolute" style="font-size: 1.5rem"></i>
    </div>
    <AppSearchResults
        v-if="isShowSearchResult && !isLoadingSearchResult"
        :search-result="searchResults?.result"
        @close="closeSearchResult"
    />
  </form>
</template>

<style lang="scss" scoped>
.search {
  width       : 25rem;
  margin-left : 2rem;

  &-wrapper {
    display : block;

    input {
      width : 100%;
    }
  }
}

.pi-spinner {
  top   : 1rem;
  right : .5rem;
}
</style>
