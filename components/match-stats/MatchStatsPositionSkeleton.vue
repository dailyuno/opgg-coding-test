<template>
  <div class="match-stats-position">
    <div class="match-stats-position__icon">
      <skeleton-loader type="circle" :width="30" :height="30" />
    </div>
    <div class="match-stats-position__content">
      <div class="match-stats-position__name">
        <skeleton-loader :width="60" :height="14" />
      </div>
      <div class="match-stats-position__detail">
        <skeleton-loader :width="100" :height="15" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-stats-position";
</style>
