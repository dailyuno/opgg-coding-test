<template>
  <div class="match-history-info">
    <div class="match-history-info__type mb-1">
      <skeleton-loader :width="40" :height="14" />
    </div>
    <div class="match-history-info__time mb-1">
      <skeleton-loader :width="70" :height="14" />
    </div>
    <div class="match-history-info__result mb-1">
      <skeleton-loader :width="40" :height="14" />
    </div>
    <div class="match-history-info__duration">
      <skeleton-loader :width="50" :height="14" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-history-info";
</style>
