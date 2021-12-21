import { getMatches } from "~/api/opgg/index.js";

export default {
  async getMatches({ commit }, name) {
    const { data } = await getMatches(name);
    commit("matches", data.games);
  },
};
