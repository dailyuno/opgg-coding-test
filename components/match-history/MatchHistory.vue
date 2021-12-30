<template>
  <div
    class="match-history"
    :class="game.isWin ? 'match-history--win' : 'match-history--lose'"
  >
    <match-history-info :game="game"></match-history-info>

    <match-history-setting :game="game"></match-history-setting>

    <match-history-score :game="game"></match-history-score>

    <match-history-stats :game="game"></match-history-stats>

    <match-history-items :game="game"></match-history-items>

    <div class="match-history__teams">
      <div class="match-history__team" v-for="team in teams" :key="team.teamId">
        <match-history-player
          v-for="(player, index) in team.players"
          :key="index"
          :player="player"
        ></match-history-player>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getMatchDetail } from "~/api/opgg";
import MatchHistoryInfo from "~/components/match-history/MatchHistoryInfo.vue";
import MatchHistorySetting from "~/components/match-history/MatchHistorySetting.vue";
import MatchHistoryScore from "~/components/match-history/MatchHistoryScore.vue";
import MatchHistoryStats from "~/components/match-history/MatchHistoryStats.vue";
import MatchHistoryItems from "~/components/match-history/MatchHistoryItems.vue";
import MatchHistoryPlayer from "~/components/match-history/MatchHistoryPlayer.vue";

export default {
  components: {
    MatchHistoryInfo,
    MatchHistorySetting,
    MatchHistoryScore,
    MatchHistoryItems,
    MatchHistoryStats,
    MatchHistoryPlayer,
  },
  props: {
    game: {
      type: Object,
    },
  },
  data() {
    return {
      teams: [],
    };
  },
  computed: {
    ...mapGetters("summoner", ["summoner"]),
  },
  async fetch() {
    try {
      const {
        data: { teams },
      } = await getMatchDetail(encodeURI(this.summoner.name));
      this.teams = teams;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
@import "match-history";
</style>
