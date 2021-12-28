<template>
  <div class="match-stats-most-champion">
    <match-stats-champion
      v-for="(champion, index) in champions"
      :champion="champion"
      :key="index"
    ></match-stats-champion>
  </div>
</template>

<script>
import MatchStatsChampion from "~/components/matches/MatchStatsChampion.vue";

export default {
  components: { MatchStatsChampion },
  props: {
    champions: {
      type: Array,
    },
  },
};
</script>

<style>
.match-stats-most-champion {
  width: 230px;
  padding: 16px 0 16px 16px;
  display: flex;
  flex-direction: column;
}
</style>
