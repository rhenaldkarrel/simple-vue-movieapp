<script setup lang="ts">
import { RouterView } from 'vue-router'
import BackToTopButton from './components/BackToTopButton/BackToTopButton.vue';
</script>

<template>
  <main class="max-w-7xl mx-auto p-8">
    <RouterView />
    <BackToTopButton />
  </main>
</template>