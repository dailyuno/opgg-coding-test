export default {
  setSearchHistory({ commit }, searchHistory) {
    commit("searchHistory", searchHistory);
  },
  setFavoriteHistory({ commit }, favoriteHistory) {
    commit("favoriteHistory", favoriteHistory);
  },
  updateSearchHistory({ commit, getters }, name) {
    const { searchHistory, findSearchHistoryIndex } = getters;
    const history = [name, ...searchHistory];
    const index = findSearchHistoryIndex(name);

    if (index >= 0) {
      history.splice(index + 1, 1);
    }

    commit("searchHistory", history);
    this.$cookiz.set("searchHistory", history, {
      maxAge: 60 * 60 * 24 * 7,
    });
  },
  deleteSearchHistory({ commit, getters }, name) {
    const { searchHistory, findSearchHistoryIndex } = getters;
    const history = [...searchHistory];
    const index = findSearchHistoryIndex(name);
    history.splice(index, 1);

    commit("searchHistory", history);
    this.$cookiz.set("searchHistory", history, {
      maxAge: 60 * 60 * 24 * 7,
    });
  },
  updateFavoriteHistory({ commit, getters }, name) {
    const { favoriteHistory, findFavoriteHistoryIndex } = getters;
    const history = [...favoriteHistory];
    const index = findFavoriteHistoryIndex(name);

    if (index < 0) {
      history.push(name);
    } else {
      history.splice(index, 1);
    }

    commit("favoriteHistory", history);
    this.$cookiz.set("favoriteHistory", history, {
      maxAge: 60 * 60 * 24 * 7,
    });
  },
  deleteFavoriteHistory({ commit, getters }, name) {
    const { favoriteHistory, findFavoriteHistoryIndex } = getters;
    const history = [...favoriteHistory];
    const index = findFavoriteHistoryIndex(name);

    if (index >= 0) {
      history.splice(index, 1);
    }

    commit("favoriteHistory", history);
    this.$cookiz.set("favoriteHistory", history, {
      maxAge: 60 * 60 * 24 * 7,
    });
  },
};
