<script setup lang="ts">
const props = defineProps<{
  id: number,
  name: string,
  image: string,
  rating: number,
  genres: string[]
}>()
</script>

<template>
  <RouterLink :to="`/shows/${props.id}`">
    <img :src="props.image" :alt="props.name" class="aspect-auto w-full object-cover rounded-lg mb-2">
    <div class="space-y-1">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold">{{ props.name }}</h2>
        <p class="flex items-center">
          {{ props.rating }}
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </p>
      </div>
      <p class="text-sm">{{ props.genres.join(', ') }}</p>
    </div>
  </RouterLink>
</template>