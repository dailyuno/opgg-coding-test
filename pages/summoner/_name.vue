<template>
  <div>
    <h2>Summoner Page</h2>
    <p>{{ summoner.name }}</p>
    <match-list :matches="matches"></match-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MatchList from "../../components/matches/MatchList.vue";

export default {
  components: {
    MatchList,
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
