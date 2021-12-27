<template>
  <div class="summoner-rank" :class="small ? 'summoner-rank--small' : ''">
    <div class="summoner-rank__img">
      <img :src="league.tierRank.imageUrl" alt="" />
    </div>
    <div class="summoner-rank__content">
      <div class="summoner-rank__type">
        {{ league.tierRank.name }}
      </div>
      <div class="summoner-rank__tier">
        {{ league.tierRank.tier }}
      </div>
      <div class="summoner-rank__info">
        <div class="summoner-rank__point">{{ league.tierRank.lp }} LP</div>
        /
        <div class="summoner-rank__win">{{ league.wins }}승</div>
        <div class="summoner-rank__lose">{{ league.losses }}패</div>
      </div>
      <div class="summoner-rank__ratio">승률 {{ winRatio }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    league: {
      type: Object,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    winRatio() {
      const { wins, losses } = this.league;
      const winRatio = (wins / (wins + losses)) * 100;
      return winRatio.toFixed(0);
    },
  },
  created() {},
};
</script>

<style lang="scss">
.summoner-rank {
  $self: &;
  width: 100%;
  color: #879292;
  background: #f2f2f2;
  border: 1px solid #cdd2d2;
  box-shadow: 0 1px #dcdfdf;
  border-radius: 2px;
  padding: 8px 0;
  display: flex;
  line-height: 1.5;

  &--small {
    margin-top: 8px;

    #{$self}__img {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }

  &__img {
    width: 104px;
    height: 104px;
    padding: 0 8px;
    box-sizing: content-box;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__type {
    font-size: 11px;
    color: #879292;
  }

  &__tier {
    font-size: 15px;
    font-weight: bold;
    color: #1f8ecd;
  }

  &__info {
    display: flex;
    font-size: 12px;
  }

  &__point {
    color: #555e5e;
    font-weight: bold;
    margin-right: 2px;
  }

  &__win {
    margin-left: 2px;
    margin-right: 2px;
  }

  &__ratio {
    font-size: 12px;
  }
}
</style>
