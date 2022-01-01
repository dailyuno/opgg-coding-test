<template>
  <div class="summoner-most">
    <v-tabs v-model="tab" :hide-slider="true">
      <v-tab
        :ripple="false"
        class="summoner-most__tab"
        active-class="summoner-most__tab--active"
        v-for="mostTab in mostTabs"
        :key="mostTab"
      >
        {{ $t(mostTab) }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        :transition="false"
        class="summoner-most__items"
        active-class="summoner-most__items--active"
      >
        <summoner-most-champion
          v-for="(champion, index) in mostInfo.champions"
          :key="index"
          :champion="champion"
          class="summoner-most__item"
        />
      </v-tab-item>
      <v-tab-item
        :transition="false"
        class="summoner-most__items"
        active-class="summoner-most__items--active"
      >
        <summoner-recent-champion
          v-for="(champion, index) in mostInfo.recentWinRate"
          :key="index"
          :champion="champion"
          class="summoner-most__item"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import SummonerMostChampion from "~/components/summoner-most/SummonerMostChampion.vue";
import SummonerRecentChampion from "~/components/summoner-most/SummonerRecentChampion.vue";

export default {
  components: {
    SummonerRecentChampion,
    SummonerMostChampion,
  },
  props: {
    mostInfo: {
      type: Object,
    },
  },
  data() {
    return {
      tab: 0,
      mostTabs: ["summoner_most.champion", "summoner_most.week"],
    };
  },
};
</script>

<style lang="scss">
@import "summoner-most";
</style>
