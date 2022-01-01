export default {
  matches(state) {
    return state.matches;
  },
  games(state) {
    return state.matches.games;
  },
  champions(state) {
    return state.matches.champions;
  },
  positions(state) {
    return state.matches.positions;
  },
  summary(state) {
    return state.matches.summary;
  },
  matchType(state) {
    return state.matchType;
  },
  filterGames(state) {
    const { matches, matchType } = state;
    const { games } = matches;

    if (matchType === "all") {
      return games;
    }

    return games.filter(game => {
      return game.gameType === matchType;
    });
  },
};
