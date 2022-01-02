<template>
  <div
    class="match-history-item"
    :class="empty ? 'match-history-item--empty' : ''"
  >
    <img
      v-if="!empty && item"
      :src="item.imageUrl"
      alt=""
      class="match-history-item__img"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "match-history-item";
</style>
