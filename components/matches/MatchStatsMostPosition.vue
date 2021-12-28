<template>
  <div class="match-stats-most-position">
    <div class="match-stats-most-position__title">선호 포지션 (랭크)</div>

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
import MatchStatsPosition from "~/components/matches/MatchStatsPosition.vue";
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
.match-stats-most-position {
  padding: 16px 0 14px 20px;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 12px;
    color: #666;
    padding-bottom: 12px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
}
</style>
