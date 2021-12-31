<template>
  <div class="match-history-items">
    <div class="match-history-items__container">
      <match-history-item-skeleton
        v-for="i in 7"
        :key="i"
      ></match-history-item-skeleton>
    </div>
    <div class="match-history-items__ward">
      <skeleton-loader :width="80" :height="16" />
    </div>
  </div>
</template>

<script>
import MatchHistoryItemSkeleton from "~/components/match-history/MatchHistoryItemSkeleton.vue";

export default {
  components: { MatchHistoryItemSkeleton },
};
</script>

<style lang="scss">
@import "match-history-items";
</style>
