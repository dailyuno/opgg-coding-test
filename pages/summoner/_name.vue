<template>
  <div class="app-layouts">
    <div class="app-layouts__container">
      <div class="summoner">
        <div class="summoner__header">
          <summoner-overview :summoner="summoner"></summoner-overview>
        </div>
        <div class="summoner__content">
          <aside class="summoner__detail">
            <summoner-rank :league="summoner.leagues[0]"></summoner-rank>
            <summoner-rank :league="summoner.leagues[1]" small></summoner-rank>
            <summoner-most :mostInfo="mostInfo" />
          </aside>

          <section class="summoner__matches">
            <match-overview :matches="matches"></match-overview>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SummonerRank from "~/components/summoner/SummonerRank";
import SummonerMost from "~/components/summoner/SummonerMost";
import MatchOverview from "~/components/matches/MatchOverview";
import SummonerOverview from "~/components/summoner/SummonerOverview.vue";

export default {
  components: {
    SummonerRank,
    SummonerMost,
    MatchOverview,
    SummonerOverview,
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
body {
  background: #eaeaea;
}

.app-layouts {
  display: flex;
  justify-content: center;
  padding-top: 10px;

  &__container {
    width: 1000px;
  }
}

.summoner {
  &__header {
  }

  &__content {
    display: flex;
  }

  &__detail {
    flex: 1 0 300px;
    max-width: 300px;
    margin-right: 10px;

    .summoner-most {
      margin-top: 8px;
    }
  }

  &__matches {
    flex: 1 0 690px;
  }
}
</style>
