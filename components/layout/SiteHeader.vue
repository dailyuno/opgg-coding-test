<template>
  <header class="site-header">
    <div class="container">
      <div class="d-flex align-items-flex-end justify-content-flex-end h-full">
        <search-form></search-form>
      </div>
    </div>
  </header>
</template>

<script>
import SearchForm from "~/components/search/SearchForm.vue";

export default {
  components: { SearchForm },
};
</script>

<style lang="scss">
@import "site-header";
</style>
