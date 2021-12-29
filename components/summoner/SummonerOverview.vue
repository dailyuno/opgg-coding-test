<template>
  <div class="summoner-overview">
    <div class="summoner-overview__badges">
      <summoner-badge
        v-for="tier in summoner.previousTiers"
        :key="tier.season"
        :tier="tier"
      ></summoner-badge>
    </div>
    <summoner-profile :summoner="summoner"></summoner-profile>
  </div>
</template>

<script>
import SummonerBadge from "~/components/summoner/SummonerBadge.vue";
import SummonerProfile from "~/components/summoner/SummonerProfile.vue";

export default {
  components: { SummonerBadge, SummonerProfile },
  props: {
    summoner: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/summoner/overview";
</style>
