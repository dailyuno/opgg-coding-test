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
@import "summoner-recent-champion";
</style>
