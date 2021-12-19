<template>
  <div class="game-item-list">
    <game-item
      v-for="game in games"
      :key="game.gameId"
      :game="game"
    ></game-item>
  </div>
</template>

<script>
import GameItem from "~/components/match/GameItem";

export default {
  props: {
    games: {
      type: Array,
    },
  },
  components: {
    GameItem,
  },
  created() {
    console.log(this.games);
  },
};
</script>

<style></style>
