<template>
  <div class="col-12">
    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
      <PrimeSkeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
      <div
          class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
          <PrimeSkeleton class="w-8rem border-round h-2rem" />
          <PrimeSkeleton class="w-6rem border-round h-1rem" />
          <div class="flex align-items-center gap-3">
            <PrimeSkeleton class="w-6rem border-round h-1rem" />
            <PrimeSkeleton class="w-3rem border-round h-1rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
