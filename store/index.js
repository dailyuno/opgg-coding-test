export const actions = {
  nuxtServerInit({ dispatch }) {
    const cookies = this.$cookiz.getAll();

    if (cookies.searchHistory) {
      dispatch("history/setSearchHistory", cookies.searchHistory);
    }

    if (cookies.favoriteHistory) {
      dispatch("history/setFavoriteHistory", cookies.favoriteHistory);
    }
  },
};
