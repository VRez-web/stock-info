<script setup lang="ts">

interface IProps {
  header: string
}

defineProps<IProps>()
</script>

<template>
  <div class="flex w-15rem border-bottom-1 border-bluegray-300 pt-2 pb-1 font-light text-sm">
    <p>
      {{ header }}
    </p>
    <p class="ml-auto font-semibold">
      <slot />
    </p>
  </div>
</template>
