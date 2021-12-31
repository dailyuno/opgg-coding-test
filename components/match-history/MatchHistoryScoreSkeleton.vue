<template>
  <div class="match-history-score">
    <div class="match-history-score__kda mb-1">
      <skeleton-loader :width="60" :height="16" />
    </div>
    <div class="match-history-score__ratio mb-1">
      <skeleton-loader :width="60" :height="16" />
    </div>
    <div class="match-history-score__badges">
      <skeleton-loader :width="60" :height="16" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
@import "match-history-score";
</style>
