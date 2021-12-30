<template>
  <div
    class="skeleton-loader__shape skeleton-loader__shape--rect"
    :style="[style, expandStyle]"
  ></div>
</template>

<script>
import BaseSkeleton from "~/components/common/BaseSkeleton.vue";

export default {
  name: "skeleton-rect",
  extends: BaseSkeleton,
  computed: {
    expandStyle() {
      return {
        "border-radius": `${this.radius}px`,
      };
    },
  },
};
</script>

<style></style>
