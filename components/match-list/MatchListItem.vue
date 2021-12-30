<template>
  <div
    class="match-item"
    :class="game.isWin ? 'match-item--win' : 'match-item--lose'"
  >
    <div class="match-item__info">
      <div class="match-item__type">
        {{ game.gameType }}
      </div>
      <div class="match-item__time">
        {{ getDateFromNow }}
      </div>
      <div class="match-item__result">
        {{ game.isWin ? "승리" : "패배" }}
      </div>
      <div class="match-item__duration">
        {{ duration }}
      </div>
    </div>

    <div class="match-item__setting">
      <div class="match-item__champion">
        <img :src="game.champion.imageUrl" alt="" />
      </div>
      <div class="match-item__spells">
        <img
          v-for="spell in game.spells"
          :key="spell.imageUrl"
          :src="spell.imageUrl"
          alt=""
        />
      </div>
      <div class="match-item__runes">
        <img v-for="peak in game.peak" :key="peak" :src="peak" alt="" />
      </div>
    </div>

    <div class="match-item__stats">
      <div class="match-item__kda">
        <span class="match-item__kill">
          {{ game.stats.general.kill }}
        </span>
        /
        <span class="match-item__death">
          {{ game.stats.general.death }}
        </span>
        /
        <span class="match-item__assist">
          {{ game.stats.general.assist }}
        </span>
      </div>
      <div class="match-item__ratio">
        <span>{{ game.stats.general.kdaString }}</span>
        평점
      </div>
      <div class="match-item__badges">
        <div
          class="match-item__multikill"
          v-if="game.stats.general.largestMultiKillString"
        >
          {{ game.stats.general.largestMultiKillString }}
        </div>
        <div
          class="match-item__opscore"
          :class="
            'match-item__opscore--' +
            game.stats.general.opScoreBadge.toLowerCase()
          "
          v-if="game.stats.general.opScoreBadge"
        >
          {{ game.stats.general.opScoreBadge }}
        </div>
      </div>
    </div>

    <div class="match-item__detail">
      <div class="match-item__level">레벨 {{ game.champion.level }}</div>
      <div class="match-item__css">
        {{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS
      </div>
      <div class="match-item__rate">
        킬관여 {{ game.stats.general.contributionForKillRate }}
      </div>
    </div>

    <div class="match-item__content">
      <div class="match-item__items">
        <div
          class="match-item__item"
          v-for="i in 7"
          :key="i"
          :class="i >= game.items.length ? 'match-item__item--empty' : ''"
        >
          <img
            v-if="i < game.items.length"
            :src="game.items[i].imageUrl"
            alt=""
          />
        </div>
      </div>
      <div class="match-item__ward">
        <img
          v-if="game.isWin"
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"
          alt=""
        />
        <img
          v-else
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png"
          alt=""
        />
        제어 와드 {{ game.stats.ward.visionWardsBought }}
      </div>
    </div>

    <div class="match-item__teams">
      <div class="match-item__team" v-for="team in teams" :key="team.teamId">
        <div
          class="match-item__player"
          v-for="(player, index) in team.players"
          :key="index"
        >
          <img :src="player.champion.imageUrl" alt="" />
          <span class="match-item__name">
            {{ player.summonerName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { getMatchDetail } from "~/api/opgg";

export default {
  props: {
    game: {
      type: Object,
    },
  },
  data() {
    return {
      teams: [],
    };
  },
  computed: {
    ...mapGetters("summoner", ["summoner"]),
    getDateFromNow() {
      return moment(this.game.createDate, "X").fromNow();
    },
    duration() {
      return moment
        .utc(this.game.gameLength * 1000)
        .format("mm분ss초")
        .replace(/^0/, "");
    },
  },
  async fetch() {
    try {
      const {
        data: { teams },
      } = await getMatchDetail(encodeURI(this.summoner.name));
      this.teams = teams;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
@import "match-list-item";
</style>
