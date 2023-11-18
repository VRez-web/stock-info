<script setup lang="ts">
import AppHeader from "~/components/app/AppHeader.vue";
</script>

<template>
  <div class="layout">
    <AppHeader />
    <div class="container">
      <main class="layout__main">
        <slot />
      </main>
    </div>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  &__main {
    margin-top : 10px;
  }
}
</style>
