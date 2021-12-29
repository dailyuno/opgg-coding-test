<template>
  <div class="summoner-overview">
    <div class="summoner-overview__badges">
      <skeleton-loader
        v-for="i in 3"
        :key="i"
        width="80"
        height="22"
        radius="3"
        inline="true"
        margin="0 7px 0 0"
      ></skeleton-loader>
    </div>
    <summoner-profile-skeleton />
  </div>
</template>

<script>
import SummonerProfileSkeleton from "~/components/summoner/SummonerProfileSkeleton.vue";
export default {
  components: { SummonerProfileSkeleton },
};
</script>

<style lang="scss">
@import "~/assets/scss/summoner/overview";
</style>
