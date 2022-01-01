export default {
  searchHistory(state) {
    return state.searchHistory || [];
  },
  searchHistoryWithFavorite(state, getters) {
    const { findFavoriteHistoryIndex } = getters;
    return state.searchHistory.map(name => {
      const index = findFavoriteHistoryIndex(name);
      const favorite = index >= 0 ? true : false;

      return {
        name,
        favorite,
      };
    });
  },
  findSearchHistoryIndex: state => name => {
    return state.searchHistory.findIndex(
      x => x.toLowerCase() === name.toLowerCase(),
    );
  },
  favoriteHistory(state) {
    return state.favoriteHistory || [];
  },
  findFavoriteHistoryIndex: state => name => {
    return state.favoriteHistory.findIndex(
      x => x.toLowerCase() === name.toLowerCase(),
    );
  },
};
