<template>
  <div class="tab" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style></style>
