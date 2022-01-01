<template>
  <div class="match-stats-most-position">
    <div class="match-stats-most-position__title">
      {{ $t("position.title") }}
    </div>

    <div class="match-stats-most-position__items">
      <match-stats-position
        :gameCount="gameCount"
        :position="position"
        v-for="(position, index) in positions"
        :key="index"
      ></match-stats-position>
    </div>
  </div>
</template>

<script>
import MatchStatsPosition from "~/components/match-stats/MatchStatsPosition.vue";
export default {
  components: { MatchStatsPosition },
  props: {
    gameCount: {
      type: Number,
    },
    positions: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "match-stats-most-position";
</style>
