<template>
  <div class="summoner-profile-info">
    <div class="summoner-profile-info__name">
      {{ summoner.name }}
    </div>
    <div class="summoner-profile-info__detail">
      {{ $t("summoner_profile_info.title") }}
      <span class="summoner-profile-info__rank">
        {{ rank }}
      </span>
      {{ $t("summoner_profile_info.rank_unit") }}
      <span class="summoner-profile-info__rank-ratio">
        ({{
          $t("summoner_profile_info.rank_rate", {
            rank_rate: summoner.ladderRank.rankPercentOfTop,
          })
        }})
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
  computed: {
    rank() {
      return this.summoner.ladderRank.rank
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss">
@import "summoner-profile-info";
</style>
