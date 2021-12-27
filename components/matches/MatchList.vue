<template>
  <div class="match-item-list">
    <match-list-item
      v-for="match in matches"
      :key="match.gameId"
      :match="match"
    ></match-list-item>
  </div>
</template>

<script>
import MatchListItem from "~/components/matches/MatchListItem";

export default {
  props: {
    matches: {
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
