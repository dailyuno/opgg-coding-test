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
};
