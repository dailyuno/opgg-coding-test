<template>
  <div class="match-stats-most-champion">
    <match-stats-champion-skeleton v-for="i in 3" :key="i" />
  </div>
</template>

<script>
import MatchStatsChampionSkeleton from "~/components/match-stats/MatchStatsChampionSkeleton.vue";
export default {
  components: { MatchStatsChampionSkeleton },
};
</script>

<style lang="scss">
@import "match-stats-most-champion";
</style>
