<template>
  <div class="app-layouts">
    <div class="app-layouts__container">
      <div class="summoner">
        <div class="summoner__header">
          <summoner-overview-skeleton v-if="isLoading" />
          <summoner-overview :summoner="summoner" v-else></summoner-overview>
        </div>
        <div class="summoner__content">
          <aside class="summoner__detail">
            <template v-if="isLoading">
              <summoner-rank-skeleton />
              <summoner-rank-skeleton small />
              <summoner-most-skeleton />
            </template>
            <template v-else>
              <summoner-rank :league="summoner.leagues[0]"></summoner-rank>
              <summoner-rank
                :league="summoner.leagues[1]"
                small
              ></summoner-rank>
              <summoner-most :mostInfo="mostInfo" />
            </template>
          </aside>

          <section class="summoner__matches">
            <match-overview-skeleton v-if="isLoading" />
            <match-overview :matches="matches" v-else></match-overview>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SummonerRank from "~/components/summoner-rank/SummonerRank";
import SummonerRankSkeleton from "~/components/summoner-rank/SummonerRankSkeleton.vue";
import SummonerMost from "~/components/summoner-most/SummonerMost";
import SummonerMostSkeleton from "~/components/summoner-most/SummonerMostSkeleton.vue";
import MatchOverview from "~/components/match/MatchOverview";
import SummonerOverview from "~/components/summoner/SummonerOverview.vue";
import SummonerOverviewSkeleton from "~/components/summoner/SummonerOverviewSkeleton.vue";
import MatchOverviewSkeleton from "~/components/match/MatchOverviewSkeleton.vue";

export default {
  components: {
    SummonerRank,
    SummonerMost,
    MatchOverview,
    SummonerOverview,
    SummonerRankSkeleton,
    SummonerOverviewSkeleton,
    SummonerMostSkeleton,
    MatchOverviewSkeleton,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters("summoner", ["summoner", "mostInfo"]),
    ...mapGetters("matches", ["matches"]),
  },
  watch: {
    "$route.params.name": {
      immediate: true,
      async handler() {
        try {
          this.isLoading = true;
          const name = encodeURI(this.$route.params.name);
          await this.getSummoner(name);
          await this.getMostInfo(name);
          await this.getMatches(name);
          this.isLoading = false;
        } catch (e) {
          console.log(e);
        }
      },
    },
  },
  methods: {
    ...mapActions("summoner", ["getSummoner", "getMostInfo"]),
    ...mapActions("matches", ["getMatches"]),
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
