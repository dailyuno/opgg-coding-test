<template>
  <div class="summoner-profile">
    <summoner-profile-image :summoner="summoner"></summoner-profile-image>
    <summoner-profile-info
      :summoner="summoner"
      class="summoner-profile__info"
    ></summoner-profile-info>
  </div>
</template>

<script>
import SummonerProfileImage from "~/components/summoner/SummonerProfileImage.vue";
import SummonerProfileInfo from "~/components/summoner/SummonerProfileInfo.vue";

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
.summoner-profile {
  display: flex;

  &__info {
    padding-top: 8px;
    padding-left: 15px;
  }
}
</style>
