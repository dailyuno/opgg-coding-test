<template>
  <div class="summoner-most-champion">
    <div class="summoner-most-champion__profile">
      <img
        :src="champion.imageUrl"
        :alt="champion.name"
        class="summoner-most-champion__profile-img"
      />
    </div>
    <div class="summoner-most-champion__info">
      <div class="summoner-most-champion__name">
        {{ champion.name }}
      </div>
      <div class="summoner-most-champion__cs">CS {{ champion.cs }}</div>
    </div>
    <div class="summoner-most-champion__stats">
      <div class="summoner-most-champion__kda-ratio">{{ kdaRatio }}:1 평점</div>
      <div class="summoner-most-champion__kda">
        <span class="summoner-most-champion__kill">
          {{ champion.kills }}
        </span>
        /
        <span class="summoner-most-champion__death">
          {{ champion.deaths }}
        </span>
        /
        <span class="summoner-most-champion__assist">
          {{ champion.assists }}
        </span>
      </div>
    </div>
    <div class="summoner-most-champion__games">
      <div class="summoner-most-champion__win-ratio">{{ winRatio }}%</div>
      <div class="summoner-most-champion__play">{{ champion.games }} 게임</div>
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
    kdaRatio() {
      const { kills, deaths, assists } = this.champion;

      return ((kills + assists) / deaths).toFixed(2);
    },
    winRatio() {
      const { games, wins } = this.champion;

      return ((wins / games) * 100).toFixed(0);
    },
  },
};
</script>

<style lang="scss">
.summoner-most-champion {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  color: #879292;
  padding: 0 8px;

  &:not(:last-child) {
    border-bottom: 1px solid #cdd2d2;
  }

  &__profile {
    display: flex;
    width: 45px;
    height: 45px;
    padding: 4px 0;
    box-sizing: content-box;

    &-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 80px;
    padding-left: 10px;
  }

  &__name {
    font-size: 13px;
    font-weight: bold;
    color: #555e5e;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__cs {
    margin-top: 6px;
    font-size: 12px;
  }

  &__stats {
  }

  &__kda-ratio {
    font-size: 13px;
    font-weight: bold;
  }

  &__kda {
    font-size: 12px;
    display: flex;
  }

  &__games {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__win-ratio {
    font-size: 13px;
    font-weight: bold;
  }

  &__play {
    font-size: 11px;
  }
}
</style>
