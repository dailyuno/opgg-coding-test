<template>
  <div class="match-overview">
    <div class="match-overview__tabs">
      <skeleton-loader :width="180" :height="16" />
    </div>
    <div class="match-overview__content">
      <div class="match-stats">
        <div class="match-stats-summary match-stats__item">
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

        <div class="match-stats-most-champion match-stats__item">
          <div class="match-stats-champion" v-for="i in 3" :key="i">
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
        </div>

        <div class="match-stats-most-position match-stats__item">
          <div class="match-stats-most-position__title">
            <skeleton-loader :width="100" :height="16" />
          </div>
          <div class="match-stats-most-position__items">
            <div class="match-stats-position" v-for="i in 2" :key="i">
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
@import "~/components/match-stats";
</style>
