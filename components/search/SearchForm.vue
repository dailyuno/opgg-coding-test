<template>
  <form class="search-form" @submit.prevent="search">
    <input
      type="text"
      class="search-form__input"
      autocomplete="off"
      v-model="input"
      placeholder="소환사명,챔피언, ..."
      @focus="showDropDown"
    />
    <button type="submit" class="search-form__button">
      <img
        src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
        alt=""
        class="search-form__icon"
      />
    </button>

    <search-history></search-history>
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
    };
  },
  computed: {
    ...mapGetters("history", ["searchHistory"]),
  },
  watch: {
    "$route.params.name": {
      immediate: true,
      handler(name) {
        this.addSearchHistory(name);
      },
    },
  },
  methods: {
    ...mapActions("history", [
      "setSearchHistory",
      "updateSearchHistory",
      "setFavoriteHistory",
    ]),
    showDropDown() {},
    addSearchHistory(name) {
      if (name.trim() === "") return;

      this.updateSearchHistory(name);
    },
    search() {
      this.addSearchHistory(this.input);

      this.$router.push({
        name: "summoner-name",
        params: {
          name: this.input,
        },
      });
    },
  },
};
</script>

<style lang="scss">
@import "search-form";
</style>
