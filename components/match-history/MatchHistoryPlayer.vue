<template>
  <div class="match-history-player">
    <img
      :src="player.champion.imageUrl"
      alt=""
      class="match-history-player__img"
    />
    <span class="match-history-player__name">
      {{ player.summonerName }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "match-history-player";
</style>
