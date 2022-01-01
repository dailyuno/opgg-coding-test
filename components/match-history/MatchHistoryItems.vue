<template>
  <div class="match-history-items">
    <div class="match-history-items__container">
      <match-history-item
        v-for="i in 7"
        :key="i"
        :empty="i >= game.items.length"
        :item="game.items[i]"
      ></match-history-item>
    </div>
    <div class="match-history-items__ward">
      <img :src="ward" alt="" class="match-history-items__ward-img" />
      {{ $t("game.ward") }} {{ game.stats.ward.visionWardsBought }}
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
  computed: {
    ward() {
      if (this.game.isWin) {
        return "https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png";
      }
      return "https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png";
    },
  },
};
</script>

<style lang="scss">
@import "match-history-items";
</style>
