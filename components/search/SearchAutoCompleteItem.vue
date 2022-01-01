<template>
  <div class="search-auto-complete-item">
    <nuxt-link
      :to="
        localePath({ name: 'summoner-name', params: { name: summoner.name } })
      "
      class="search-auto-complete-item__link"
    >
      <div class="search-auto-complete-item__profile">
        <img
          :src="summoner.profileImageUrl"
          alt=""
          class="search-auto-complete-item__img"
        />
      </div>
      <div class="search-auto-complete-item__detail">
        <div class="search-auto-complete-item__name">
          {{ summoner.name }}
        </div>
        <div class="search-auto-complete-item__info">
          {{ info }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    summoner: {
      type: Object,
    },
  },
  computed: {
    info() {
      const { level, leagues } = this.summoner;
      const [solo] = leagues;

      if (solo && solo.hasResults) {
        const { tierRank } = solo;
        const { tier, lp } = tierRank;
        return `${tier} - ${lp}LP`;
      } else {
        return `Level ${level}`;
      }
    },
  },
};
</script>

<style lang="scss">
@import "search-auto-complete-item";
</style>
