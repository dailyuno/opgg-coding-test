<template>
  <div>
    <h2>Summoner Page</h2>
    <p>{{ summoner.name }}</p>
    <game-item-list :games="games"></game-item-list>
  </div>
</template>

<script>
import { getSummoner, getMatches } from "~/api/opgg/index";
import GameItemList from "../../components/match/GameItemList.vue";

export default {
  components: {
    GameItemList,
  },
  data() {
    return {
      name: "",
      summoner: "",
    };
  },
  async asyncData({ params }) {
    try {
      const { name } = params;
      const {
        data: { summoner },
      } = await getSummoner(name);
      const {
        data: { games },
      } = await getMatches(name);
      return { summoner, games };
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style></style>
