<template>
  <div class="summoner-most">
    <v-tabs v-model="tab">
      <v-tab
        :ripple="false"
        v-for="(info, key) in mostInfo"
        :key="key"
        class="summoner-most__tab"
      >
        {{ key }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :transition="false">
        <summoner-most-champion
          v-for="(champion, index) in mostInfo.champions"
          :key="index"
          :champion="champion"
        />
      </v-tab-item>
      <v-tab-item :transition="false">
        <summoner-recent-champion
          v-for="(champion, index) in mostInfo.recentWinRate"
          :key="index"
          :champion="champion"
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
    };
  },
};
</script>

<style lang="scss">
@import "summoner-most";
</style>
