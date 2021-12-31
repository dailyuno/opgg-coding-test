<template>
  <div class="match-overview">
    <div class="match-overview__tabs">
      <skeleton-loader :width="180" :height="16" />
    </div>
    <div class="match-overview__content">
      <match-stats-skeleton />

      <div class="match-overview__list">
        <match-history-skeleton v-for="i in 5" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import MatchStatsSkeleton from "~/components/match-stats/MatchStatsSkeleton.vue";
export default {
  components: { MatchStatsSkeleton },
};
</script>

<style></style>
