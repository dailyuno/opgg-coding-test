<template>
  <div class="match-stats-champion">
    <div class="match-stats-champion__profile">
      <img
        :src="champion.imageUrl"
        :alt="champion.name"
        class="match-stats-champion__img"
      />
    </div>
    <div class="match-stats-champion__content">
      <div class="match-stats-champion__name">
        {{ champion.name }}
      </div>
      <div class="match-stats-champion__detail">
        <span class="match-stats-champion__win-rate">
          {{ calcWinRatio(champion) }}%
        </span>
        <span class="match-stats-champion__win-lose">
          ({{ champion.wins }}승 {{ champion.losses }}패)
        </span>
        <span class="match-stats-champion__kda">
          {{ calcKdaRatio(champion) }} 평점
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { calcWinRatio, calcKdaRatio } from "~/utils/calc";

export default {
  props: {
    champion: {
      type: Object,
    },
  },
  methods: {
    calcWinRatio,
    calcKdaRatio,
  },
};
</script>

<style lang="scss">
@import "match-stats-champion";
</style>
