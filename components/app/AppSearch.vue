<script setup lang="ts">
</script>

<template>
  <div class="search">
    <div class="search-wrapper  p-input-icon-left">
      <i class="pi pi-search" />
      <PrimeInputText placeholder="Company or stock symbol..." size="small" />
    </div>
  </div>
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
</style>
