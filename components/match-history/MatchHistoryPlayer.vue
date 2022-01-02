<template>
  <div class="match-history-player">
    <img
      :src="player.champion.imageUrl"
      alt=""
      class="match-history-player__img"
    />
    <nuxt-link
      :to="
        localePath({
          name: 'summoner-name',
          params: { name: player.summonerName },
        })
      "
      class="match-history-player__name"
    >
      {{ player.summonerName }}
    </nuxt-link>
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
