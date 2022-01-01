import { getSummoner } from "~/api/opgg/index";
import { getMostInfo } from "~/api/opgg/index";

export default {
  async getSummoner({ commit }, name) {
    const { data } = await getSummoner(name, this.$i18n.locale);
    commit("summoner", data.summoner);
  },
  async getMostInfo({ commit }, name) {
    const { data } = await getMostInfo(name, this.$i18n.locale);
    commit("mostInfo", data);
  },
};
