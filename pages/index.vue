<template>
  <div class="app-layouts">
    <site-header></site-header>

    <div class="no-summoner">
      <div class="container">
        <div class="no-summoner__header">
          <img src="images/no_summoner.png" alt="" class="no-summoner__img" />
        </div>
        <div class="no-summoner__content">
          <h2 class="no-summoner__title">OP.GG 소환사 검색 기능입니다.</h2>
          <div class="no-summoner__search">
            <search-form class="no-summoner__form"></search-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "~/components/layout/SiteHeader.vue";
import SearchForm from "~/components/search/SearchForm.vue";

export default {
  name: "IndexPage",
  components: {
    SiteHeader,
    SearchForm,
  },
};
</script>

<style lang="scss">
.no-summoner {
  padding-top: 100px;

  &__header {
    text-align: center;
  }

  &__img {
    width: 350px;
  }

  &__title {
    text-align: center;
    font-size: 28px;
    margin-top: 40px;
  }

  &__search {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  &__form {
    width: 640px;
    height: 50px;
  }
}
</style>
