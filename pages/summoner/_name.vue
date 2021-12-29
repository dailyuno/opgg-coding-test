<template>
  <div class="app-layouts">
    <div class="app-layouts__container">
      <aside class="app-aside">
        <summoner-rank :league="summoner.leagues[0]"></summoner-rank>
        <summoner-rank :league="summoner.leagues[1]" small></summoner-rank>
        <summoner-most :mostInfo="mostInfo" />
      </aside>

      <section class="app-content">
        <match-overview :matches="matches"></match-overview>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SummonerRank from "~/components/summoner/SummonerRank";
import SummonerMost from "~/components/summoner/SummonerMost";
import MatchOverview from "~/components/matches/MatchOverview";

export default {
  components: {
    SummonerRank,
    SummonerMost,
    MatchOverview,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("summoner", ["summoner", "mostInfo"]),
    ...mapGetters("matches", ["matches"]),
  },
  async fetch({ store, params }) {
    try {
      const { name } = params;
      await store.dispatch("summoner/getSummoner", name);
      await store.dispatch("summoner/getMostInfo", name);
      await store.dispatch("matches/getMatches", name);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
.app-layouts {
  display: flex;
  justify-content: center;
  background: #eaeaea;
  padding-top: 10px;

  &__container {
    display: flex;
    width: 1000px;
  }
}

.app-aside {
  flex: 1 0 300px;
  max-width: 300px;
  margin-right: 10px;

  .summoner-most {
    margin-top: 8px;
  }
}

.app-content {
  flex: 1 0 690px;
}
</style>
