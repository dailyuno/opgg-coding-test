<template>
  <div class="match-history-setting">
    <div class="match-history-setting__champion">
      <skeleton-loader type="circle" :width="46" :height="46" />
    </div>
    <div class="match-history-setting__spells">
      <skeleton-loader :width="22" :height="22" class="mb-1" />
      <skeleton-loader :width="22" :height="22" />
    </div>
    <div class="match-history-setting__runes">
      <skeleton-loader :width="22" :height="22" class="mb-1" />
      <skeleton-loader :width="22" :height="22" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-history-setting";
</style>
