<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const threshold = 500
const scrollTop = ref(0)
const showButton = ref(false)

const handleBackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  const handleOnScroll = () => {
    scrollTop.value = window.scrollY || document.documentElement.scrollTop
  }

  window.addEventListener('scroll', handleOnScroll)
})

watch(scrollTop, (newVal) => {
  showButton.value = newVal >= threshold
})
</script>

<template>
  <button
    :class="{
      'p-4 bg-white border fixed bottom-0 right-0 m-4 rounded-lg hover:bg-gray-200 transition opacity-0 shadow-lg': true,
      'opacity-100': showButton
    }"
    @click="handleBackToTop">
    Back to top
  </button>
</template>