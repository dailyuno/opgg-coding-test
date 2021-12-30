<template>
  <div class="match-stats-champion">
    <div class="match-stats-champion__profile">
      <skeleton-loader type="circle" :width="34" :height="34" />
    </div>
    <div class="match-stats-champion__content">
      <div class="match-stats-champion__name">
        <skeleton-loader :width="60" :height="15" />
      </div>
      <div class="match-stats-champion__detail mt-1">
        <skeleton-loader :width="120" :height="14" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-stats-champion";
</style>
