<template>
  <div>
    <match-stats-summary :games="games"></match-stats-summary>
  </div>
</template>

<script>
import MatchStatsSummary from "~/components/matches/MatchStatsSummary.vue";

export default {
  components: { MatchStatsSummary },
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

<style></style>
