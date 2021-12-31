export default {
  setSearchHistory({ commit }, searchHistory) {
    commit("searchHistory", searchHistory);
  },
  setFavoriteHistory({ commit }, favoriteHistory) {
    commit("favoriteHistory", favoriteHistory);
  },
};
