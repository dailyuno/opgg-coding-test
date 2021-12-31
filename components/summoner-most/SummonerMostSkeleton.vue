<template>
  <div class="summoner-most summoner-most--skeleton">
    <div class="d-flex">
      <div class="summoner-most__tab" v-for="i in 2" :key="i">
        <skeleton-loader :width="100" :height="20"></skeleton-loader>
      </div>
    </div>
    <div class="summoner-most__tab-items">
      <div class="summoner-most-champion" v-for="i in 3" :key="i">
        <div class="summoner-most-champion__profile">
          <skeleton-loader
            :type="'circle'"
            :width="45"
            :height="45"
          ></skeleton-loader>
        </div>
        <div class="summoner-most-champion__info">
          <div class="summoner-most-champion__name mb-1">
            <skeleton-loader :width="60" :height="15"></skeleton-loader>
          </div>
          <div class="summoner-most-champion__cs">
            <skeleton-loader :width="40" :height="15"></skeleton-loader>
          </div>
        </div>
        <div class="summoner-most-champion__stats">
          <div class="summoner-most-champion__kda-ratio mb-1">
            <skeleton-loader :width="60" :height="15"></skeleton-loader>
          </div>
          <div class="summoner-most-champion__kda">
            <skeleton-loader :width="80" :height="15"></skeleton-loader>
          </div>
        </div>
        <div class="summoner-most-champion__games">
          <div class="summoner-most-champion__win-ratio mb-1">
            <skeleton-loader :width="40" :height="15"></skeleton-loader>
          </div>
          <div class="summoner-most-champion__play">
            <skeleton-loader :width="40" :height="15"></skeleton-loader>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "summoner-most";
@import "summoner-most-champion";
</style>
