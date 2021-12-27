<template>
  <div class="match-overview">
    <v-tabs v-model="tab">
      <v-tab v-for="type in gameTypes" :key="type">
        {{ type }}
      </v-tab>
    </v-tabs>

    <v-tabs-items>
      <v-tab-item>
        <match-stats></match-stats>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import MatchStats from "~/components/matches/MatchStats.vue";
export default {
  components: {
    MatchStats,
  },
  props: {},
  data() {
    return {
      gameTypes: ["전체", "솔로랭크", "자유랭크"],
    };
  },
};
</script>

<style></style>
