<template>
  <div
    class="skeleton-loader__shape skeleton-loader__shape--rect"
    :style="style"
  ></div>
</template>

<script>
export default {
  name: "skeleton-rect",
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    radius: {
      type: Number,
      default: 0,
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
        "border-radius": `${this.radius}px`,
        margin: this.margin,
      };
    },
  },
};
</script>

<style></style>
