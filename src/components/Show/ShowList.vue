<script setup lang="ts">
import ShowItem from './ShowItem.vue';

const props = defineProps<{ shows: any[] }>()
</script>

<template>
  <div class="show-list">
    <slot></slot>

    <div class="shows grid grid-cols-5 gap-8" data-test="items">
      <ShowItem
        v-for="item in props.shows"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :image="item.image?.medium"
        :genres="item.genres"
        :rating="item.rating.average"
      />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
