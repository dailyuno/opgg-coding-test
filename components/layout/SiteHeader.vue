<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header__container">
        <div class="site-header__locales">
          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="site-header__locale-link"
          >
            {{ locale.name }}
          </nuxt-link>
        </div>
        <search-form class="site-header__form"></search-form>
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
