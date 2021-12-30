<template>
  <div class="match-stats-position" v-if="position.games > 0">
    <div class="match-stats-position__icon">
      <div
        class="match-stats-position__icon-img"
        :class="
          'match-stats-position__icon-img--' +
          position.positionName.toLowerCase()
        "
      ></div>
    </div>
    <div class="match-stats-position__content">
      <div class="match-stats-position__name">{{ position.positionName }}</div>
      <div class="match-stats-position__detail">
        <div class="match-stats-position__role-rate">
          {{ Math.floor((position.games / gameCount) * 100) }}%
        </div>
        <div class="match-stats-position__win-ratio">
          승률 {{ calcWinRatio(position) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { calcWinRatio } from "~/utils/calc";

export default {
  props: {
    gameCount: {
      type: Number,
    },
    position: {
      type: Object,
    },
  },
  methods: {
    calcWinRatio,
  },
};
</script>

<style lang="scss">
@import "match-stats-position";
</style>
