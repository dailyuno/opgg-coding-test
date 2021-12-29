<template>
  <div class="summoner-profile">
    <div class="summoner-profile__img">
      <img
        :src="summoner.profileImageUrl"
        alt=""
        class="summoner-profile__icon"
      />
      <img
        :src="summoner.profileBorderImageUrl"
        alt=""
        class="summoner-profile__border"
      />
    </div>
    <div class="summoner-profile__level">
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
.summoner-profile {
  position: relative;

  &__img {
    width: 120px;
    height: 120px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    width: 100px;
    height: 100px;
  }

  &__border {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__level {
    position: absolute;
    left: 38px;
    bottom: 0;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    background-image: url("https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png");
    background-size: 100%;
    font-size: 14px;
    text-align: center;
    color: #eabd56;
  }
}
</style>
