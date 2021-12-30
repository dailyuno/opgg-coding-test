<template>
  <div
    class="skeleton-loader__shape skeleton-loader__shape--circle"
    :style="style"
  ></div>
</template>

<script>
import BaseSkeleton from "~/components/common/BaseSkeleton.vue";

export default {
  name: "skeleton-circle",
  extends: BaseSkeleton,
};
</script>

<style></style>
