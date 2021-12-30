<template>
  <div class="match-stats-most-position">
    <div class="match-stats-most-position__title">
      <skeleton-loader :width="100" :height="16" />
    </div>
    <div class="match-stats-most-position__items">
      <match-stats-position-skeleton v-for="i in 2" :key="i" />
    </div>
  </div>
</template>

<script>
import MatchStatsPositionSkeleton from "~/components/match-stats/MatchStatsPositionSkeleton.vue";
export default {
  components: { MatchStatsPositionSkeleton },
};
</script>

<style lang="scss">
@import "match-stats-most-position";
</style>
