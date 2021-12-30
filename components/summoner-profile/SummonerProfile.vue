<template>
  <div class="summoner-profile summoner-profile--skeleton">
    <summoner-profile-image :summoner="summoner"></summoner-profile-image>
    <summoner-profile-info :summoner="summoner"></summoner-profile-info>
  </div>
</template>

<script>
import SummonerProfileImage from "~/components/summoner-profile/SummonerProfileImage.vue";
import SummonerProfileInfo from "~/components/summoner-profile/SummonerProfileInfo.vue";

export default {
  components: { SummonerProfileImage, SummonerProfileInfo },
  props: {
    summoner: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "summoner-profile";
</style>
