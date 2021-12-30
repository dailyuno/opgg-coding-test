<template>
  <div class="summoner-profile">
    <div class="summoner-profile-img">
      <div class="summoner-profile-img__container">
        <skeleton-loader type="rect" :width="120" :height="120" />
      </div>
    </div>
    <div class="summoner-profile-info">
      <skeleton-loader :width="80" :height="22" />
      <skeleton-loader :width="162" :height="15" margin="6px 0 0 0" />
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
