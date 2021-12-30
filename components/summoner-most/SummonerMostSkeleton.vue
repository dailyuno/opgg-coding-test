<template>
  <div class="summoner-most summoner-most--skeleton">
    <div class="d-flex">
      <div class="summoner-most__tab" v-for="i in 2" :key="i">
        <skeleton-loader :width="100" :height="20"></skeleton-loader>
      </div>
    </div>
    <div class="summoner-most__tab-items">
      <summoner-most-champion-skeleton
        v-for="i in 5"
        :key="i"
      ></summoner-most-champion-skeleton>
    </div>
  </div>
</template>

<script>
import SummonerMostChampionSkeleton from "~/components/summoner-most/SummonerMostChampionSkeleton.vue";

export default {
  components: { SummonerMostChampionSkeleton },
};
</script>

<style lang="scss">
@import "summoner-most";
</style>
