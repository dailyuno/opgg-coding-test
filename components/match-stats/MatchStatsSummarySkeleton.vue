<template>
  <div class="match-stats-summary">
    <div class="match-stats-summary__title">
      <skeleton-loader :width="80" :height="16" />
    </div>
    <div class="match-stats-summary__content">
      <div class="match-stats-summary__graph-container">
        <skeleton-loader type="circle" :width="90" :height="90" />
      </div>
      <div class="match-stats-summary__detail">
        <div class="match-stats-summary__kda">
          <skeleton-loader :width="70" :height="15" />
        </div>
        <div class="match-stats-summary__score">
          <skeleton-loader :width="85" :height="21" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-stats-summary";
</style>
