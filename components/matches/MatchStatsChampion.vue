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
.match-stats-champion {
  display: flex;

  &:not(:last-child) {
    padding-bottom: 8px;
  }

  &__profile {
    width: 34px;
    height: 34px;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 6px;
  }

  &__name {
    font-size: 14px;
    margin-bottom: 2px;
    color: #333;
  }

  &__detail {
    display: flex;
    color: #333;
    font-size: 11px;
  }

  &__win-rate {
    font-weight: bold;
    margin-right: 3px;
  }

  &__kda {
    font-weight: bold;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      display: inline-block;
      margin-left: 6px;
      margin-right: 6px;
      width: 1px;
      height: 11px;
      background: #e0e3e3;
    }
  }
}
</style>
