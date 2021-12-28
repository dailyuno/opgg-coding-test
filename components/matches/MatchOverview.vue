<template>
  <div class="match-overview">
    <v-tabs v-model="tab">
      <v-tab v-for="type in gameTypes" :key="type">
        {{ type }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <match-stats
          :games="games"
          :champions="champions"
          :positions="positions"
        ></match-stats>
        <match-list :games="games"></match-list>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MatchStats from "~/components/matches/MatchStats.vue";
import MatchList from "~/components/matches/MatchList.vue";

export default {
  components: {
    MatchStats,
    MatchList,
  },
  props: {},
  data() {
    return {
      gameTypes: ["전체", "솔로랭크", "자유랭크"],
      tab: 0,
    };
  },
  computed: {
    ...mapGetters("matches", ["games", "champions", "positions"]),
  },
};
</script>

<style></style>
