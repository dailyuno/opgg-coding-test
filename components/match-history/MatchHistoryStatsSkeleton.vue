<template>
  <div class="match-history-stats">
    <div class="match-history-stats__level mb-1">
      <skeleton-loader :width="60" :height="12" />
    </div>
    <div class="match-history-stats__css mb-1">
      <skeleton-loader :width="60" :height="12" />
    </div>
    <div class="match-history-stats__ck-rate">
      <skeleton-loader :width="60" :height="12" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
@import "match-history-stats";
</style>
