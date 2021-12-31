<template>
  <div class="match-history">
    <div class="match-history-info">
      <skeleton-loader :width="60" :height="60" />
    </div>

    <match-history-setting-skeleton />

    <div class="match-history-score">
      <skeleton-loader :width="80" :height="60" />
    </div>

    <div class="match-history-stats">
      <skeleton-loader :width="60" :height="40" />
    </div>

    <match-history-items-skeleton />

    <div class="match-history__teams">
      <skeleton-loader :width="170" :height="70" />
    </div>
  </div>
</template>

<script>
import MatchHistorySettingSkeleton from "~/components/match-history/MatchHistorySettingSkeleton.vue";
import MatchHistoryItemsSkeleton from "~/components/match-history/MatchHistoryItemsSkeleton.vue";

export default {
  components: {
    MatchHistorySettingSkeleton,
    MatchHistoryItemsSkeleton,
  },
};
</script>

<style lang="scss">
@import "match-history-item";
</style>
