<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="bg-white">
    <main class="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <img class="mx-auto h-10 w-auto sm:h-12" src="./assets/img/logo.png" alt="Nightingale Guide" />
      <div class="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
        <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">Sorry, we couldn’t find the page you’re looking for.</p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <div class="mt-10 flex justify-center">
          <a href="https://thronglets.online/" class="text-sm font-semibold leading-6 text-indigo-600">
            <span aria-hidden="true">&larr;</span>
            Back to home
          </a>
        </div>
      </div>
    </main>
  </div>
</template>
