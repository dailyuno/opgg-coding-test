<template>
  <div class="match-history-items">
    <div class="match-history-items__container">
      <match-history-item
        v-for="i in 7"
        :key="i"
        :empty="i >= game.items.length"
        :item="game.items[i]"
      ></match-history-item>
      <match-history-item>
        <img :src="image" alt="" class="match-history-item__img" />
      </match-history-item>
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
    image() {
      return this.game.isWin
        ? "/images/icons/item_blue.png"
        : "/images/icons/item_red.png";
    },
    ward() {
      return this.game.isWin
        ? "/images/icons/ward_blue.png"
        : "/images/icons/ward_red.png";
    },
  },
};
</script>

<style lang="scss">
@import "match-history-items";
</style>
