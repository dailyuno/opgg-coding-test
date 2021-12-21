import { getSummoner } from "~/api/opgg/index.js";

export default {
  async getSummoner({ commit }, name) {
    const { data } = await getSummoner(name);
    commit("summoner", data.summoner);
  },
};
