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
.summoner-badge {
  display: inline-flex;
  padding: 3px 4px 2px 4px;
  background-color: #e0e3e3;
  color: #657070;
  font-size: 11px;
  border: 1px solid #ced3d3;
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 7px;
  }

  &__season {
    font-weight: bold;
    margin-right: 2px;
  }
}
</style>
