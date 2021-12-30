<template>
  <div class="summoner-profile-info">
    <div class="summoner-profile-info__name">
      {{ summoner.name }}
    </div>
    <div class="summoner-profile-info__detail">
      래더 랭킹
      <span class="summoner-profile-info__rank">
        {{
          summoner.ladderRank.rank
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }} </span
      >위
      <span class="summoner-profile-info__rank-ratio">
        (상위 {{ summoner.ladderRank.rankPercentOfTop }}%)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    summoner: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
@import "summoner-profile-info";
</style>
