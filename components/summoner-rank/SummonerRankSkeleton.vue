<template>
  <div
    class="summoner-rank summoner-rank--skeleton"
    :class="small ? 'summoner-rank--small' : ''"
  >
    <div class="summoner-rank__tier">
      <skeleton-loader type="circle" :width="size" :height="size" />
    </div>
    <div class="summoner-rank__content">
      <skeleton-loader type="rect" :width="80" :height="15" class="mb-2" />
      <skeleton-loader type="rect" :width="100" :height="15" class="mb-2" />
      <skeleton-loader type="rect" :width="150" :height="15" class="mb-2" />
      <skeleton-loader type="rect" :width="60" :height="15" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
    },
  },
  computed: {
    size() {
      return this.small ? 64 : 80;
    },
  },
};
</script>

<style lang="scss">
@import "summoner-rank";
</style>
