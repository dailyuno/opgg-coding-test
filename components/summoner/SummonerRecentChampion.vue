<template>
  <div class="summoner-recent-champion">
    <div class="summoner-recent-champion__profile">
      <img
        :src="champion.imageUrl"
        :alt="champion.name"
        class="summoner-recent-champion__img"
      />
    </div>
    <div class="summoner-recent-champion__name">
      {{ champion.name }}
    </div>
    <div class="summoner-recent-champion__win-ratio">{{ winRatio }}%</div>
    <div class="summoner-recent-champion__graphs">
      <div
        class="summoner-recent-champion__graph summoner-recent-champion__graph--win"
        v-if="champion.wins > 0"
        :style="{ width: winRatio + '%' }"
      >
        <span class="summoner-recent-champion__ratio">
          {{ champion.wins }}승
        </span>
      </div>
      <div
        class="summoner-recent-champion__graph summoner-recent-champion__graph--lose"
        v-if="champion.losses > 0"
        :style="{ width: 100 - winRatio + '%' }"
      >
        <span class="summoner-recent-champion__ratio">
          {{ champion.losses }}패
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    champion: {
      type: Object,
    },
  },
  computed: {
    winRatio() {
      const { wins, losses } = this.champion;
      const winRatio = (wins / (wins + losses)) * 100;
      return winRatio.toFixed(0);
    },
  },
};
</script>

<style lang="scss">
.summoner-recent-champion {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: #ededed;
  $self: &;

  &:not(:last-child) {
    border-bottom: 1px solid #cdd2d2;
  }

  &__profile {
    width: 32px;
    height: 32px;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &__name {
    width: 75px;
    padding-left: 10px;
    padding-right: 5px;
    font-size: 12px;
    color: #555e5e;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__win-ratio {
    font-size: 12px;
    color: #879292;
    width: 40px;
  }

  &__graphs {
    display: flex;
    flex: 1 0 auto;
    height: 22px;
    border-radius: 3px;
    overflow: hidden;
  }

  &__graph {
    font-size: 11px;
    color: #f2f2f2;
    position: relative;
    white-space: nowrap;

    &--win {
      background: #3d95e5;
      border: 1px solid #3480c6;
      justify-content: flex-start;

      #{$self}__ratio {
        top: 2px;
        left: 6px;
      }
    }

    &--lose {
      flex: 1 0 auto;
      background: #ee5a52;
      border: 1px solid #c6443e;
      justify-content: flex-end;

      #{$self}__ratio {
        top: 2px;
        right: 6px;
      }
    }
  }

  &__ratio {
    position: absolute;
    z-index: 1;
  }
}
</style>
