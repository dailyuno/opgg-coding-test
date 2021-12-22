<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        class="tabs__item"
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="tab.isActive ? 'tabs__item--active' : ''"
        @click="selectTab(idx)"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.tabs.forEach(tab => {
        tab.isActive = false;
      });

      this.tabs[i].isActive = true;
    },
  },
};
</script>

<style></style>
