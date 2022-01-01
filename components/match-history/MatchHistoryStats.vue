<template>
  <div class="match-history-stats">
    <div class="match-history-stats__level">
      {{ $t("game.level") }} {{ game.champion.level }}
    </div>
    <div class="match-history-stats__css">
      {{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS
    </div>
    <div class="match-history-stats__ck-rate">
      {{ $t("game.ck_rate") }} {{ game.stats.general.contributionForKillRate }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "match-history-stats";
</style>
