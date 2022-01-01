<template>
  <form class="search-form" @click.stop @submit.prevent="search">
    <input
      type="text"
      class="search-form__input"
      autocomplete="off"
      v-model="input"
      placeholder="소환사명,챔피언, ..."
      @focus="showHistoryList"
      @input="showAutoCompleteList"
    />
    <button type="submit" class="search-form__button">
      <img
        src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
        alt=""
        class="search-form__icon"
      />
    </button>

    <search-history v-show="showHistory"></search-history>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchHistory from "~/components/search/SearchHistory.vue";

export default {
  components: {
    SearchHistory,
  },
  data() {
    return {
      input: "",
      showHistory: false,
      showAutoComplete: false,
    };
  },
  computed: {
    ...mapGetters("history", ["searchHistory"]),
  },
  watch: {
    "$route.params.name": {
      immediate: true,
      handler(name) {
        if (name) {
          this.updateSearchHistory(name);
        }
      },
    },
  },
  methods: {
    ...mapActions("history", [
      "setSearchHistory",
      "updateSearchHistory",
      "setFavoriteHistory",
    ]),
    showHistoryList() {
      this.showHistory = true;
    },
    hideHistoryList() {
      this.showHistory = false;
    },
    showAutoCompleteList() {
      const { input } = this;

      if (input === "") {
        this.showHistoryList();
        return;
      }

      this.hideHistoryList();
    },
    search() {
      const { input } = this;

      if (input.trim() === "") return;

      this.updateSearchHistory(input);

      this.$router.push({
        name: "summoner-name",
        params: {
          name: input,
        },
      });
    },
  },
  mounted() {
    window.addEventListener("click", this.hideHistoryList);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.hideHistoryList);
  },
};
</script>

<style lang="scss">
@import "search-form";
</style>
