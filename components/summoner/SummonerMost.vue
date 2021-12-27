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
import SummonerMostChampion from "./SummonerMostChampion";
import SummonerRecentChampion from "./SummonerRecentChampion";

export default {
  components: {
    SummonerMostChampion,
    SummonerRecentChampion,
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
.summoner-most {
  border: 1px solid #cdd2d2;
  box-shadow: 0 1px #dcdfdf;
  background: #f2f2f2;
  border-radius: 2px;

  &__tab {
    text-transform: capitalize;
    text-align: center;
    width: 150px;
    border-bottom: 1px solid #cdd2d2;

    &:not(:last-child) {
      border-right: 1px solid #cdd2d2;
    }
  }

  .v-slide-group {
    background-color: #f2f2f2;
  }
}
</style>
