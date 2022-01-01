import { getMatches } from "~/api/opgg/index.js";

export default {
  async getMatches({ commit }, name) {
    const { data } = await getMatches(name, this.$i18n.locale);
    commit("matches", data);
  },
  setMatchType({ commit }, type) {
    commit("matchType", type);
  },
};
