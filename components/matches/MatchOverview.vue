<template>
  <div class="match-overview">
    <div class="match-overview__tabs">
      <div
        class="match-overview__tab"
        v-for="type in gameTypes"
        :key="type.id"
        :class="type.id === matchType ? 'match-overview__tab--active' : ''"
        @click="setMatchType(type.id)"
      >
        {{ type.label }}
      </div>
    </div>

    <div class="match-overview__content">
      <match-stats
        :games="filterGames"
        :champions="matches.champions"
        :positions="matches.positions"
      ></match-stats>
      <match-list
        :games="filterGames"
        class="match-overview__list"
      ></match-list>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MatchStats from "~/components/matches/MatchStats.vue";
import MatchList from "~/components/matches/MatchList.vue";

export default {
  components: {
    MatchStats,
    MatchList,
  },
  props: {
    matches: {
      type: Array,
    },
  },
  data() {
    return {
      gameTypes: [
        {
          id: "전체",
          label: "전체",
        },
        {
          id: "솔랭",
          label: "솔로랭크",
        },
        {
          id: "자유 5:5 랭크",
          label: "자유랭크",
        },
      ],
      tab: 0,
    };
  },
  computed: {
    ...mapGetters("matches", ["matchType", "filterGames"]),
  },
  methods: {
    ...mapMutations("matches", ["setMatchType"]),
  },
};
</script>

<style lang="scss">
.match-overview {
  &__tabs {
    display: flex;
    align-items: center;
    height: 34px;
    border: 1px solid #cdd2d2;
    border-bottom: none;
    box-shadow: 0 1px #dcdfdf;
    background: #f2f2f2;
    border-radius: 2px;
    padding-left: 10px;
  }

  &__tab {
    color: #555e5e;
    font-size: 12px;
    line-height: 32px;
    margin: 0 10px;
    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      color: #222;
    }

    &--active {
      color: #228eed;
      font-weight: bold;
      border-color: #228eed;
    }
  }

  &__list {
    margin-top: 10px;
  }
}
</style>
