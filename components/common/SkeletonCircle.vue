<template>
  <div
    class="skeleton-loader__shape skeleton-loader__shape--circle"
    :style="style"
  ></div>
</template>

<script>
export default {
  name: "skeleton-circle",
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    margin: {
      type: String,
      default: "0",
    },
  },
  computed: {
    style() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        margin: this.margin,
      };
    },
  },
};
</script>

<style></style>
