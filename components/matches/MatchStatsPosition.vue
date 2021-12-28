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
.match-stats-position {
  display: flex;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &__icon {
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon-img {
    height: 100%;
    background-image: url("https://opgg-static.akamaized.net/assets/site.png?image=q_auto&v=1637122822");

    &--top {
      background-position: -112px -2844px;
      width: 28px;
      height: 28px;
    }

    &--jungle {
      background-position: -116px -2613px;
      width: 24px;
      height: 28px;
    }

    &--support {
      background-position: -104px -2768px;
      width: 36px;
      height: 26px;
    }

    &--bottom {
      background-position: -112px -2536px;
      width: 28px;
      height: 28px;
    }

    &--middle {
      background-position: -112px -2691px;
      width: 28px;
      height: 28px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 4px;
  }

  &__name {
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
  }

  &__detail {
    display: flex;
  }

  &__role-rate {
    font-size: 11px;
    color: #1f8ecd;
  }

  &__win-ratio {
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #666;

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
