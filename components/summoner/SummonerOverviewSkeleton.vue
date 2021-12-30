<template>
  <div class="summoner-overview summoner-overview--skeleton">
    <div class="summoner-overview__badges">
      <skeleton-loader
        v-for="i in 3"
        :key="i"
        :width="80"
        :height="22"
        :radius="3"
        :inline="true"
        class="mr-2"
      ></skeleton-loader>
    </div>
    <summoner-profile-skeleton />
  </div>
</template>

<script>
import SummonerProfileSkeleton from "~/components/summoner-profile/SummonerProfileSkeleton.vue";

export default {
  components: { SummonerProfileSkeleton },
};
</script>

<style lang="scss">
@import "summoner-overview";
</style>
