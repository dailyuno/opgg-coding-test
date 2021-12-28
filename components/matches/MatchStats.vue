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
import MatchStatsMostChampion from "~/components/matches/MatchStatsMostChampion.vue";
import MatchStatsMostPosition from "~/components/matches/MatchStatsMostPosition.vue";
import MatchStatsSummary from "~/components/matches/MatchStatsSummary.vue";

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
.match-stats {
  border: 1px solid #cdd2d2;
  box-shadow: 0 1px #dcdfdf;
  background: #ededed;
  border-radius: 2px;
  display: flex;

  &__item {
    &:not(:first-child) {
      border-left: 1px solid #cdd2d2;
    }
  }
}
</style>
