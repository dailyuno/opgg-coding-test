<template>
  <div class="summoner-profile">
    <div class="summoner-profile-img">
      <div class="summoner-profile-img__container">
        <skeleton-loader type="rect" :width="120" :height="120" />
      </div>
    </div>
    <div class="summoner-profile-info">
      <div class="summoner-profile-info__name">
        <skeleton-loader :width="80" :height="22" />
      </div>
      <div class="summoner-profile-info__detail">
        <skeleton-loader :width="162" :height="15" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "summoner-profile";
@import "summoner-profile-info";
@import "summoner-profile-image";
</style>
