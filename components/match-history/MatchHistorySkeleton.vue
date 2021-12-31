<template>
  <div class="match-history">
    <div class="match-history-info">
      <skeleton-loader :width="60" :height="60" />
    </div>

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

    <div class="match-history-score">
      <skeleton-loader :width="80" :height="60" />
    </div>

    <div class="match-history-stats">
      <skeleton-loader :width="60" :height="40" />
    </div>

    <div class="match-history-items">
      <div class="match-history-items__container">
        <div class="match-history-item" v-for="i in 7" :key="i">
          <skeleton-loader :width="22" :height="22" />
        </div>
      </div>
      <div class="match-history-items__ward">
        <skeleton-loader :width="80" :height="16" />
      </div>
    </div>

    <div class="match-history__teams">
      <skeleton-loader :width="170" :height="70" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "match-history";
@import "match-history-items";
@import "match-history-item";
@import "match-history-setting";
</style>
