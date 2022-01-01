<template>
  <div class="search-history">
    <v-tabs v-model="tab" :hide-slider="true">
      <v-tab
        v-for="historyTab in historyTabs"
        :key="historyTab"
        :ripple="false"
        active-class="search-history__tab--active"
        class="search-history__tab"
      >
        {{ historyTab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :transition="false">
        <search-history-message v-if="searchHistoryWithFavorite.length < 1">
          최근에 본 소환사가 없습니다.
        </search-history-message>
        <div class="search-history__list" v-else>
          <search-history-item
            v-for="history in searchHistoryWithFavorite"
            :key="history.name"
            :name="history.name"
            :favorite="history.favorite"
          />
        </div>
      </v-tab-item>
      <v-tab-item :transition="false">
        <search-history-message v-if="favoriteHistory.length < 1">
          관심있는 소환사에
          <i class="icon icon--favorite-off"></i>
          즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </search-history-message>
        <div class="search-history__list" v-else>
          <search-history-item
            v-for="name in favoriteHistory"
            :key="name"
            :bookmark="true"
            :name="name"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: 0,
      historyTabs: ["최근검색", "즐겨찾기"],
    };
  },
  computed: {
    ...mapGetters("history", ["searchHistoryWithFavorite", "favoriteHistory"]),
  },
};
</script>

<style lang="scss">
@import "search-history";
</style>
