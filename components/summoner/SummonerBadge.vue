<template>
  <div class="summoner-badge">
    <div class="summoner-badge__season">S{{ tier.season }}</div>
    <div class="summoner-badge__tier">{{ tier.tier }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tier: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "summoner-badge";
</style>
