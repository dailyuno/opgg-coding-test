<template>
  <div class="summoner-profile-img">
    <div class="summoner-profile-img__container">
      <img
        :src="summoner.profileImageUrl"
        alt=""
        class="summoner-profile-img__icon"
      />
      <img
        :src="summoner.profileBorderImageUrl"
        alt=""
        class="summoner-profile-img__border"
      />
    </div>
    <div class="summoner-profile-img__level">
      {{ summoner.level }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    summoner: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "summoner-profile-image";
</style>
