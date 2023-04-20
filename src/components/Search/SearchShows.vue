<script setup lang="ts">
import { watch, reactive } from 'vue'
import debounce from 'lodash/debounce'
import * as api from '../../services/api'
import ShowList from '../Show/ShowList.vue'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator.vue';

interface IState {
  query: string
  shows: any[]
  isLoading: boolean
}

const state: IState = reactive({
  query: '',
  shows: [],
  isLoading: false
})

watch(
  () => state.query,
  debounce(async (newQuery: string) => {
    state.isLoading = true
    state.shows = await api.searchShows(newQuery)
    state.isLoading = false
  }, 500)
)
</script>
<template>
  <div class="search-shows flex flex-col mb-8">
    <label class="mb-4">Search your favorite show 🎥</label>

    <div :class="{ 'relative': true, 'mb-8': state.shows.length > 0 }">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input v-model="state.query" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search shows...">
    </div>

    <div class="loading" v-show="state.isLoading">
      <LoadingIndicator />
    </div>

    <ShowList
      v-if="!state.isLoading && state.shows.length > 0"
      data-test="search-results"
      class="search-results"
      :shows="state.shows"
    >
      <h1 class="font-bold mb-8">Search Results 🔍</h1>
    </ShowList>
  </div>
</template>