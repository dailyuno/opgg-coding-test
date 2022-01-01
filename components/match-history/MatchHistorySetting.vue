<template>
  <div class="match-history-setting">
    <div class="match-history-setting__header">
      <div class="match-history-setting__champion">
        <img
          :src="game.champion.imageUrl"
          alt=""
          class="match-history-setting__champion-img"
        />
      </div>
      <div class="match-history-setting__spells">
        <img
          v-for="spell in game.spells"
          :key="spell.imageUrl"
          :src="spell.imageUrl"
          alt=""
          class="match-history-setting__spell-img"
        />
      </div>
      <div class="match-history-setting__runes">
        <img
          v-for="peak in game.peak"
          :key="peak"
          :src="peak"
          alt=""
          class="match-history-setting__rune-img"
        />
      </div>
    </div>
    <div class="match-history-setting__content">
      <div class="match-history-setting__name"></div>
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
@import "match-history-setting";
</style>
