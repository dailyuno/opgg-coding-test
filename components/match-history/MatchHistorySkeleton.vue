<template>
  <div class="match-history">
    <match-history-info-skeleton />
    <match-history-setting-skeleton />
    <match-history-score-skeleton />
    <match-history-stats-skeleton />
    <match-history-items-skeleton />

    <div class="match-history__teams">
      <div class="match-history__team" v-for="i in 2" :key="i">
        <skeleton-loader
          v-for="i in 5"
          :key="i"
          :width="70"
          :height="13"
          class="mb-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MatchHistoryInfoSkeleton from "~/components/match-history/MatchHistoryInfoSkeleton.vue";
import MatchHistorySettingSkeleton from "~/components/match-history/MatchHistorySettingSkeleton.vue";
import MatchHistoryScoreSkeleton from "~/components/match-history/MatchHistoryScoreSkeleton.vue";
import MatchHistoryStatsSkeleton from "~/components/match-history/MatchHistoryStatsSkeleton.vue";

export default {
  components: {
    MatchHistoryInfoSkeleton,
    MatchHistorySettingSkeleton,
    MatchHistoryScoreSkeleton,
    MatchHistoryStatsSkeleton,
  },
};
</script>

<style lang="scss">
@import "match-history-item";
</style>
