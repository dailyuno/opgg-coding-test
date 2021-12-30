<template>
  <div class="match-history-info">
    <div class="match-history-info__type">
      {{ game.gameType }}
    </div>
    <div class="match-history-info__time">
      {{ getDateFromNow }}
    </div>
    <div class="match-history-info__result">
      {{ game.isWin ? "승리" : "패배" }}
    </div>
    <div class="match-history-info__duration">
      {{ duration }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    game: {
      type: Object,
    },
  },
  computed: {
    getDateFromNow() {
      return moment(this.game.createDate, "X").fromNow();
    },
    duration() {
      return moment
        .utc(this.game.gameLength * 1000)
        .format("mm분ss초")
        .replace(/^0/, "");
    },
  },
};
</script>

<style lang="scss">
@import "match-history-info";
</style>
