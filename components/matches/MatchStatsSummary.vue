<template>
  <div class="match-stats-summary">
    <div class="match-stats-summary__title">
      {{ games.length }}전 {{ wins }}승 {{ losses }}패
    </div>
    <div class="match-stats-summary__content">
      <div class="match-stats-summary__graph-container">
        <highchart :options="chartOptions" class="match-stats-summary__graph" />
        <div class="match-stats-summary__win-rate">
          {{ calcWinRatio({ wins, losses }) }}%
        </div>
      </div>
      <div class="match-stats-summary__detail">
        <div class="match-stats-summary__kda">
          <span class="match-stats-summary__kill">
            {{ avgStats.kills.toFixed(1) }}
          </span>
          /
          <span class="match-stats-summary__death">
            {{ avgStats.deaths.toFixed(1) }}
          </span>
          /
          <span class="match-stats-summary__assist">
            {{ avgStats.assists.toFixed(1) }}
          </span>
        </div>
        <div class="match-stats-summary__score">
          <div class="match-stats-summary__kda-ratio">
            {{ calcKdaRatio(avgStats) }}:1
          </div>
          <div class="match-stats-summary__ck-rate">
            ({{ avgCKRate.toFixed(0) }}%)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { calcWinRatio, calcKdaRatio } from "~/utils/calc";

export default {
  props: {
    games: {
      type: Array,
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
          backgroundColor: "transparent",
          height: 90,
          marginTop: 15,
        },
        title: {
          text: "",
        },
        series: [
          {
            data: [],
            enableMouseTracking: false,
          },
        ],
        colors: ["#ee5a52", "#1f8ecd"],
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
            size: 90,
            shadow: false,
            innerSize: "70%",
          },
        },
        credits: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
          anmation: false,
        },
      },
    };
  },
  methods: {
    calcWinRatio,
    calcKdaRatio,
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
        kills: kills / len,
        deaths: deaths / len,
        assists: assists / len,
      };
    },
    avgCKRate() {
      return (
        this.games.reduce((acc, cur) => {
          const { contributionForKillRate } = cur.stats.general;
          return acc + parseInt(contributionForKillRate);
        }, 0) / this.games.length
      );
    },
  },
  watch: {
    games: {
      immediate: true,
      handler() {
        this.chartOptions.series[0].data = [this.losses, this.wins];
      },
    },
  },
};
</script>

<style lang="scss">
.match-stats-summary {
  width: 270px;
  padding: 16px 0 24px 14px;

  &__title {
    font-size: 12px;
    color: #666;
    padding-bottom: 12px;
  }

  &__content {
    display: flex;
    align-items: center;
  }

  &__graph-container {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__graph {
    position: absolute;
  }

  &__win-rate {
    font-size: 14px;
    color: #555;
  }

  &__detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__kda {
    font-size: 11px;
    font-weight: bold;
    color: #879292;
    display: flex;
  }

  &__kill,
  &__death,
  &__assist {
    margin: 0 2px;
  }

  &__kill,
  &__assist {
    color: #555e5e;
  }

  &__death {
    color: #c6443e;
  }

  &__score {
    display: flex;
    align-items: center;
    padding-top: 7px;
  }

  &__kda-ratio {
    font-size: 16px;
    color: #353a3a;
  }

  &__ck-rate {
    font-size: 16px;
    color: #c6443e;
    margin-left: 2px;
  }
}
</style>
