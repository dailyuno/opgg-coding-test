<template>
  <div class="match-history-score">
    <div class="match-history-score__kda">
      <span class="match-history-score__kill">
        {{ game.stats.general.kill }}
      </span>
      /
      <span class="match-history-score__death">
        {{ game.stats.general.death }}
      </span>
      /
      <span class="match-history-score__assist">
        {{ game.stats.general.assist }}
      </span>
    </div>
    <div class="match-history-score__ratio">
      <span>{{ game.stats.general.kdaString }}</span>
      {{ $t("game.kda") }}
    </div>
    <div class="match-history-score__badges">
      <div
        class="match-history-score__multikill"
        v-if="game.stats.general.largestMultiKillString"
      >
        {{ game.stats.general.largestMultiKillString }}
      </div>
      <div
        class="match-history-score__opscore"
        :class="
          'match-history-score__opscore--' +
          game.stats.general.opScoreBadge.toLowerCase()
        "
        v-if="game.stats.general.opScoreBadge"
      >
        {{ game.stats.general.opScoreBadge }}
      </div>
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
@import "match-history-score";
</style>
