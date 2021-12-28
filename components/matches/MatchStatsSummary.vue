<template>
  <div class="match-stats-summary">
    <div class="match-stats-summary__title">
      {{ games.length }}전 {{ wins }}승 {{ losses }}패
    </div>
    <div class="match-stats-summary__content">
      <div class="match-stats-summary__graph">
        {{ calcWinRatio({ wins, losses }) }}%
      </div>
      <div class="match-stats-summary__detail">
        <div class="match-stats-summary__kda">
          <span class="match-stats-summary__kill">
            {{ avgStats.kills }}
          </span>
          <span class="match-stats-summary__death">
            {{ avgStats.deaths }}
          </span>
          <span class="match-stats-summary__assists">
            {{ avgStats.assists }}
          </span>
        </div>
        <div class="match-stats-summary__kda-ratio"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { calcWinRatio } from "~/utils/calc";

export default {
  props: {
    games: {
      type: Array,
    },
  },
  methods: {
    calcWinRatio,
    filterGames(isWin) {
      return this.games.filter(x => x.isWin === isWin);
    },
    filterGamesCount(isWin) {
      return this.filterGames(isWin).length;
    },
  },
  computed: {
    wins() {
      return this.filterGamesCount(true);
    },
    losses() {
      return this.filterGamesCount(false);
    },
    avgStats() {
      const stats = this.games.reduce(
        (acc, cur) => {
          const { kill, death, assist } = cur.stats.general;

          return {
            kills: acc.kills + kill,
            deaths: acc.deaths + death,
            assists: acc.assists + assist,
          };
        },
        {
          kills: 0,
          deaths: 0,
          assists: 0,
        },
      );

      const len = this.games.length;
      const { kills, deaths, assists } = stats;

      return {
        kills: (kills / len).toFixed(1),
        deaths: (deaths / len).toFixed(1),
        assists: (assists / len).toFixed(1),
      };
    },
  },
};
</script>

<style></style>
