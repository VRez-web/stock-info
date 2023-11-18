<script setup lang="ts">
import AppSearch from "~/components/app/AppSearch.vue";
</script>

<template>
  <PrimeToolbar>
    <template #start>
      <nuxt-link :to="{name:'index'}" class="logo">
        <span>Stock</span>Info
      </nuxt-link>
      <AppSearch />
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

