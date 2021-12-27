<template>
  <div class="match-item-list">
    <match-list-item
      v-for="game in games"
      :key="game.gameId"
      :game="game"
    ></match-list-item>
  </div>
</template>

<script>
import MatchListItem from "~/components/matches/MatchListItem";

export default {
  props: {
    games: {
      type: Array,
    },
  },
  components: {
    MatchListItem,
  },
};
</script>

<style lang="scss">
.match-item-list {
  width: 100%;
}
</style>
