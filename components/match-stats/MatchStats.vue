<template>
  <div class="match-stats">
    <match-stats-summary :games="games" class="match-stats__item">
    </match-stats-summary>

    <match-stats-most-champion :champions="champions" class="match-stats__item">
    </match-stats-most-champion>

    <match-stats-most-position
      :gameCount="games.length"
      :positions="positions"
      class="match-stats__item"
    >
    </match-stats-most-position>
  </div>
</template>

<script>
import MatchStatsMostChampion from "~/components/match-stats/MatchStatsMostChampion.vue";
import MatchStatsMostPosition from "~/components/match-stats/MatchStatsMostPosition.vue";
import MatchStatsSummary from "~/components/match-stats/MatchStatsSummary.vue";

export default {
  components: {
    MatchStatsSummary,
    MatchStatsMostChampion,
    MatchStatsMostPosition,
  },
  props: {
    games: {
      type: Array,
    },
    champions: {
      type: Array,
    },
    positions: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "match-stats";
</style>
