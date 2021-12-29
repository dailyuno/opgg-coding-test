<template>
  <div class="summoner-profile summoner-profile--skeleton">
    <skeleton-loader type="rect" width="120" height="120" />
    <div class="summoner-profile__text">
      <skeleton-loader width="80" height="22" />
      <skeleton-loader width="162" height="15" margin="6px 0 0 0" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "~/assets/scss/summoner/profile";
</style>
