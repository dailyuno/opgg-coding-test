<template>
  <div class="app-layouts">
    <div class="app-layouts__content">
      <aside class="app-aside">
        <summoner-rank :league="summoner.leagues[0]"></summoner-rank>
        <summoner-rank :league="summoner.leagues[1]" small></summoner-rank>
        <summoner-most :mostInfo="mostInfo" />
      </aside>
      <match-list :matches="matches"></match-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MatchList from "~/components/matches/MatchList";
import SummonerRank from "~/components/summoner/SummonerRank";
import SummonerMost from "~/components/summoner/SummonerMost";

export default {
  components: {
    MatchList,
    SummonerRank,
    SummonerMost,
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

  &__content {
    display: flex;
    width: 1000px;
  }
}

.app-aside {
  flex: 1 0 310px;
  padding-right: 10px;

  .summoner-most {
    margin-top: 8px;
  }
}
</style>
