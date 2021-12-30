<template>
  <div class="match-stats-most-champion">
    <match-stats-champion
      v-for="(champion, index) in champions"
      :champion="champion"
      :key="index"
    ></match-stats-champion>
  </div>
</template>

<script>
import MatchStatsChampion from "~/components/match-stats/MatchStatsChampion.vue";

export default {
  components: { MatchStatsChampion },
  props: {
    champions: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "match-stats-most-champion";
</style>
