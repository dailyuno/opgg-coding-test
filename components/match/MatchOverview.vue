<template>
  <div class="match-overview">
    <div class="match-overview__tabs">
      <div
        class="match-overview__tab"
        v-for="type in gameTypes"
        :key="type.id"
        :class="type.id === matchType ? 'match-overview__tab--active' : ''"
        @click="setMatchType(type.id)"
      >
        {{ type.label }}
      </div>
    </div>

    <div class="match-overview__content">
      <match-stats
        :games="filterGames"
        :champions="matches.champions"
        :positions="matches.positions"
      ></match-stats>

      <div class="match-overview__list">
        <match-history
          v-for="game in filterGames"
          :key="game.gameId"
          :game="game"
        ></match-history>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MatchStats from "~/components/match-stats/MatchStats.vue";
import MatchHistory from "~/components/match-history/MatchHistory.vue";

export default {
  components: {
    MatchStats,
    MatchHistory,
  },
  props: {
    matches: {
      type: Object,
    },
  },
  data() {
    return {
      gameTypes: [
        {
          id: "all",
          label: this.$t("match_type.all"),
        },
        {
          id: this.$t("game.solo"),
          label: this.$t("match_type.solo"),
        },
        {
          id: this.$t("game.flex"),
          label: this.$t("match_type.flex"),
        },
      ],
      tab: 0,
    };
  },
  computed: {
    ...mapGetters("matches", ["matchType", "filterGames"]),
  },
  methods: {
    ...mapActions("matches", ["setMatchType"]),
  },
};
</script>

<style lang="scss">
@import "match-overview";
</style>
