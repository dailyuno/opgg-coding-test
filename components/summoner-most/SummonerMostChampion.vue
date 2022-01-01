<template>
  <div class="summoner-most-champion">
    <div class="summoner-most-champion__profile">
      <img
        :src="champion.imageUrl"
        :alt="champion.name"
        class="summoner-most-champion__img"
      />
    </div>
    <div class="summoner-most-champion__info">
      <div class="summoner-most-champion__name">
        {{ champion.name }}
      </div>
      <div class="summoner-most-champion__cs">CS {{ champion.cs }}</div>
    </div>
    <div class="summoner-most-champion__stats">
      <div class="summoner-most-champion__kda-ratio">
        {{ kdaRatio }}:1 {{ $t("game.kda") }}
      </div>
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
      <div class="summoner-most-champion__play">
        {{ champion.games }} {{ $t("summoner_most.played") }}
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
@import "summoner-most-champion";
</style>
