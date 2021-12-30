<template>
  <div class="match-stats">
    <match-stats-summary-skeleton class="match-stats__item" />
    <match-stats-most-champion-skeleton class="match-stats__item" />
    <match-stats-most-position-skeleton class="match-stats__item" />
  </div>
</template>

<script>
import MatchStatsMostChampionSkeleton from "~/components/match-stats/MatchStatsMostChampionSkeleton.vue";
import MatchStatsMostPositionSkeleton from "~/components/match-stats/MatchStatsMostPositionSkeleton.vue";
import MatchStatsSummarySkeleton from "~/components/match-stats/MatchStatsSummarySkeleton.vue";

export default {
  components: {
    MatchStatsSummarySkeleton,
    MatchStatsMostChampionSkeleton,
    MatchStatsMostPositionSkeleton,
  },
};
</script>

<style lang="scss">
@import "match-stats";
</style>
