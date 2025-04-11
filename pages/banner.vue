<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h1 class="text-4xl font-bold tracking-tight text-white">Thronglets Game</h1>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="assets/img/explore.jpg" alt="nightingale explore" class="object-cover object-center group-hover:opacity-75" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
          <div class="flex items-end">
            <div class="w-full bg-black bg-opacity-75 backdrop-blur backdrop-filter p-4">
              <h2 class="font-semibold text-white">
                <p>
                  <span class="absolute inset-0" />
                  Interact
                </p>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white line-clamp-2 md:line-clamp-3 break-all">Players engage with Thronglets by answering their questions and making choices, shaping their behavior and worldview while reflecting the player's values.</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="assets/img/build.png" alt="nightingale build" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="flex items-end sm:absolute sm:inset-0">
            <div class="w-full bg-black bg-opacity-75 backdrop-blur backdrop-filter p-4">
              <h2 class="font-semibold text-white">
                <p>
                  <span class="absolute inset-0" />
                  Manage
                </p>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white line-clamp-2 md:line-clamp-3 break-all">Players need to construct and upgrade buildings, such as factories, theaters, and bridges, to support the growing population of Thronglets.</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="assets/img/survival.jpg" alt="nightingale survival" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="flex items-end sm:absolute sm:inset-0">
            <div class="w-full bg-black bg-opacity-75 backdrop-blur backdrop-filter p-4">
              <h2 class="font-semibold text-white">
                <p>
                  <span class="absolute inset-0" />
                  Survive
                </p>
              </h2>
              <p aria-hidden="true" class="mt-1 text-sm text-white line-clamp-2 md:line-clamp-3 break-all">In the game, Thronglets require food, entertainment, and cleanliness to survive. Players must meet these needs to prevent the Thronglets from dying.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>