<template>
  <div class="search-history-item">
    <a href="#" class="search-history-item__link">{{ name }}</a>
    <div class="search-history-item__actions">
      <template v-if="bookmark">
        <i
          class="icon icon--close search-history-item__action"
          @click="deleteFavoriteHistory(name)"
        >
        </i>
      </template>
      <template v-else>
        <i
          class="icon search-history-item__action"
          :class="icon"
          @click="updateFavoriteHistory(name)"
        >
        </i>
        <i
          class="icon icon--close search-history-item__action"
          @click="deleteSearchHistory(name)"
        >
        </i>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    name: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    bookmark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters("history", ["searchHistory", "favoriteHistory"]),
    icon() {
      return this.favorite ? "icon--favorite-on" : "icon--favorite-off";
    },
  },
  methods: {
    ...mapActions("history", [
      "deleteSearchHistory",
      "updateFavoriteHistory",
      "deleteFavoriteHistory",
    ]),
  },
};
</script>

<style lang="scss">
@import "search-history-item";
</style>
