<script setup lang="ts">
import {vOnClickOutside} from "@vueuse/components";
import type {ISearchResultItem} from "~/types/search";

interface IProp {
  searchResult: ISearchResultItem[] | null | undefined
}

defineProps<IProp>()

const emit = defineEmits<{
  (e: 'close', value: boolean): void
}>()

const closeResult = (e) => {
  emit('close', e.target.classList.value.includes('search-input'))
}
</script>

<template>
  <div class="absolute w-full" v-on-click-outside="closeResult">
    <PrimeListbox
        v-if="searchResult"
        :options="searchResult"
        optionLabel="name"
        class="w-full"
        listStyle="max-height:250px"
        :pt="{
          emptyMessage:{class:'p-0'},
          item:{class:'pl-1 pr-1'}
        }"
    >
      <template #option="searchResultItem">
        <div class="flex align-items-center justify-content-between text-sm w-full">
          <p class="w-6rem">{{ searchResultItem.option.displaySymbol }}</p>
          <p class="w-7rem">{{ searchResultItem.option.description }}</p>
          <p class="w-7rem">{{ searchResultItem.option.type }}</p>
        </div>
      </template>
      <template #empty>
        <p class="text-sm">No results found. Try a full text search instead.</p>
      </template>
    </PrimeListbox>
  </div>
</template>
