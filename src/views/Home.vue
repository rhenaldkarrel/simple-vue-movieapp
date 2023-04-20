<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { store } from '../services/store'
import ShowList from '../components/Show/ShowList.vue'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator.vue';

interface IState {
  isLoading: boolean
  topRatedShows: any[]
}

const state: IState = reactive({
  isLoading: true,
  topRatedShows: [],
})

onMounted(async () => {
  const allShows = await store.getAllShows()

  state.topRatedShows = allShows.filter((item) => item.rating.average >= 7.5)

  state.isLoading = false
})
</script>

<template>
  <LoadingIndicator v-if="state.isLoading" />
  <ShowList :shows="state.topRatedShows" v-else>
    <h1 class="font-bold mb-8">Top Rated Shows</h1>
  </ShowList>
</template>