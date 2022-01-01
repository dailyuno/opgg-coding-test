<template>
  <div class="match-history-info">
    <div class="match-history-info__type">
      {{ game.gameType }}
    </div>
    <div class="match-history-info__time">
      {{ getDateFromNow }}
    </div>
    <div class="match-history-info__result">
      {{ game.isWin ? $t("game.victory") : $t("game.defeat") }}
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
      moment.locale(this.$i18n.locale);
      return moment(this.game.createDate, "X").fromNow();
    },
    duration() {
      const date = moment.utc(this.game.gameLength * 1000);
      const minute = parseInt(date.format("m"));
      const second = parseInt(date.format("s"));

      let text = "";

      if (minute > 0) {
        text += `${minute}${this.$t("time.minute")} `;
      }

      if (second > 0) {
        text += `${second}${this.$t("time.second")}`;
      }

      return text;
    },
  },
};
</script>

<style lang="scss">
@import "match-history-info";
</style>
