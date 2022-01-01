<template>
  <div class="summoner-rank" :class="small ? 'summoner-rank--small' : ''">
    <div class="summoner-rank__tier">
      <img
        :src="league.tierRank.imageUrl"
        :alt="league.tierRank.name"
        class="summoner-rank__tier-img"
      />
    </div>
    <div class="summoner-rank__content">
      <div class="summoner-rank__type">
        {{ type }}
      </div>
      <div class="summoner-rank__name">
        {{ league.tierRank.tier }}
      </div>
      <div class="summoner-rank__info">
        <div class="summoner-rank__point">{{ league.tierRank.lp }} LP</div>
        /
        <div class="summoner-rank__win">
          {{ league.wins }}{{ $t("game.win") }}
        </div>
        <div class="summoner-rank__lose">
          {{ league.losses }}{{ $t("game.lose") }}
        </div>
      </div>
      <div class="summoner-rank__ratio">
        {{ $t("game.win_rate") }}
        {{ winRatio }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
    league: {
      type: Object,
    },
    small: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      defualt: false,
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
@import "summoner-rank";
</style>
