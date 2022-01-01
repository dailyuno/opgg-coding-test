<template>
  <div class="search-auto-complete">
    <search-auto-complete-item
      v-for="summoner in summonerList"
      :key="summoner.name"
      :summoner="summoner"
    ></search-auto-complete-item>
  </div>
</template>

<script>
import SearchAutoCompleteItem from "~/components/search/SearchAutoCompleteItem.vue";

export default {
  components: { SearchAutoCompleteItem },
  props: {
    summonerList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "search-auto-complete";
</style>
