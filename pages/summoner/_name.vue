<template>
  <div>
    <h2>Summoner Page</h2>
    <p>{{ summoner.name }}</p>
    <game-item-list :games="matches"></game-item-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GameItemList from "../../components/match/GameItemList.vue";

export default {
  components: {
    GameItemList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("summoner", ["summoner"]),
    ...mapGetters("matches", ["matches"]),
  },
  async fetch({ store, params }) {
    try {
      const { name } = params;
      await store.dispatch("summoner/getSummoner", name);
      await store.dispatch("matches/getMatches", name);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style></style>
