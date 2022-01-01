<template>
  <form class="search-form" @click.stop @submit.prevent="search">
    <input
      type="text"
      class="search-form__input"
      autocomplete="off"
      :placeholder="$t('search_form.placeholder')"
      @focus="showDropDown"
      @input="setAutoCompleteList"
    />
    <button type="submit" class="search-form__button">
      <img
        src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
        alt=""
        class="search-form__icon"
      />
    </button>

    <search-history v-show="showHistory"></search-history>
    <search-auto-complete
      v-show="showAutoComplete"
      :summonerList="summonerList"
    ></search-auto-complete>
  </form>
</template>

<script>
import { getSummoner } from "~/api/opgg";
import { mapGetters, mapActions } from "vuex";
import SearchAutoComplete from "~/components/search/SearchAutoComplete.vue";
import SearchHistory from "~/components/search/SearchHistory.vue";

export default {
  components: {
    SearchHistory,
    SearchAutoComplete,
  },
  data() {
    return {
      input: "",
      showHistory: false,
      showAutoComplete: false,
      summonerList: [],
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
    showDropDown() {
      if (this.input === "") {
        this.showHistory = true;
        this.showAutoComplete = false;
        return;
      }

      this.showHistory = false;
      this.showAutoComplete = true;
    },
    hideDropDown() {
      this.showHistory = false;
      this.showAutoComplete = false;
    },
    // eslint-disable-next-line no-undef
    setAutoCompleteList: _.debounce(async function (e) {
      this.input = e.target.value.replace(/ /g, "");
      this.showDropDown();

      if (this.showHistory) {
        return;
      }

      const {
        data: { summoner },
      } = await getSummoner(this.input);

      this.summonerList = [{ ...summoner }];
    }),
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
    window.addEventListener("click", this.hideDropDown);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.hideDropDown);
  },
};
</script>

<style lang="scss">
@import "search-form";
</style>
