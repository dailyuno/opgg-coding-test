<template>
  <div class="summoner-overview summoner-overview--skeleton">
    <div class="summoner-overview__badges">
      <skeleton-loader
        v-for="i in 3"
        :key="i"
        :width="80"
        :height="22"
        :radius="3"
        :inline="true"
        class="mr-2"
      ></skeleton-loader>
    </div>

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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "summoner-overview";
@import "~/components/summoner-profile";
</style>
