<template>
  <div
    class="match-item"
    :class="match.isWin ? 'match-item--win' : 'match-item--lose'"
  >
    <div class="match-item__info">
      <div class="match-item__type">
        {{ match.gameType }}
      </div>
      <div class="match-item__time">
        {{ getDateFromNow }}
      </div>
      <div class="match-item__result">
        {{ match.isWin ? "승리" : "패배" }}
      </div>
      <div class="match-item__duration">
        {{ duration }}
      </div>
    </div>

    <div class="match-item__setting">
      <div class="match-item__champion">
        <img :src="match.champion.imageUrl" alt="" />
      </div>
      <div class="match-item__spells">
        <img
          v-for="spell in match.spells"
          :key="spell.imageUrl"
          :src="spell.imageUrl"
          alt=""
        />
      </div>
      <div class="match-item__runes">
        <img v-for="peak in match.peak" :key="peak" :src="peak" alt="" />
      </div>
    </div>

    <div class="match-item__stats">
      <div class="match-item__kda">
        <span class="match-item__kill">
          {{ match.stats.general.kill }}
        </span>
        /
        <span class="match-item__death">
          {{ match.stats.general.death }}
        </span>
        /
        <span class="match-item__assist">
          {{ match.stats.general.assist }}
        </span>
      </div>
      <div class="match-item__ratio">
        <span>{{ match.stats.general.kdaString }}</span>
        평점
      </div>
      <div class="match-item__badges">
        <div
          class="match-item__multikill"
          v-if="match.stats.general.largestMultiKillString"
        >
          {{ match.stats.general.largestMultiKillString }}
        </div>
        <div
          class="match-item__opscore"
          :class="
            'match-item__opscore--' +
            match.stats.general.opScoreBadge.toLowerCase()
          "
          v-if="match.stats.general.opScoreBadge"
        >
          {{ match.stats.general.opScoreBadge }}
        </div>
      </div>
    </div>

    <div class="match-item__detail">
      <div class="match-item__level">레벨 {{ match.champion.level }}</div>
      <div class="match-item__css">
        {{ match.stats.general.cs }} ({{ match.stats.general.csPerMin }}) CS
      </div>
      <div class="match-item__rate">
        킬관여 {{ match.stats.general.contributionForKillRate }}
      </div>
    </div>

    <div class="match-item__content">
      <div class="match-item__items">
        <div
          class="match-item__item"
          v-for="i in 7"
          :key="i"
          :class="i >= match.items.length ? 'match-item__item--empty' : ''"
        >
          <img
            v-if="i < match.items.length"
            :src="match.items[i].imageUrl"
            alt=""
          />
        </div>
      </div>
      <div class="match-item__ward">
        <img
          v-if="match.isWin"
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-blue.png"
          alt=""
        />
        <img
          v-else
          src="https://opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png"
          alt=""
        />
        제어 와드 {{ match.stats.ward.visionWardsBought }}
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
    match: {
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
      return moment(this.match.createDate, "X").fromNow();
    },
    duration() {
      return moment
        .utc(this.match.gameLength * 1000)
        .format("mm분ss초")
        .replace(/^0/, "");
    },
  },
  async fetch() {
    try {
      const {
        data: { teams },
      } = await getMatchDetail(this.summoner.name);
      this.teams = teams;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss">
.match-item {
  $self: &;
  display: flex;
  margin-bottom: 8px;
  height: 96px;

  &--win {
    background-color: #a3cfec;
    border-color: #99b9cf;

    #{ $self }__result {
      color: #1a78ae;
    }
  }

  &--lose {
    background-color: #e2b6b3;
    border-color: #cea7a7;

    #{ $self }__result {
      color: #c6443e;
    }
  }

  &__info {
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: #555;
  }

  &__type {
    font-weight: bold;
  }

  &__type,
  &__time {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  &__result {
    font-weight: bold;
  }

  &__setting {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__champion {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__spells,
  &__runes {
    display: flex;
    flex-direction: column;
    margin-left: 4px;

    img {
      width: 22px;
    }
  }

  &__stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
  }

  &__kda {
    font-size: 15px;
    color: #879292;
  }

  &__kill,
  &__assist,
  &__death {
    font-weight: bold;
  }

  &__kill,
  &__assist {
    color: #555e5e;
  }

  &__death {
    color: #c6443e;
  }

  &__ratio {
    font-size: 12px;
    font-weight: bold;
    color: #353a3a;
  }

  &__badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__multikill,
  &__opscore {
    color: #f2f2f2;
    border-radius: 15px;
    padding: 2px 5px;
    font-size: 10px;
    margin-top: 8px;

    &:nth-child(n + 2) {
      margin-left: 4px;
    }
  }

  &__multikill {
    background: #ee5a52;
    border: 1px solid #c6443e;
  }

  &__opscore {
    &--mvp {
      background-color: #e19205;
      border: 1px solid #b88a2a;
    }

    &--ace {
      background-color: #8c51c5;
      border: solid 1px #7f3590;
    }
  }

  &__detail {
    width: 90px;
    font-size: 11px;
    color: #555e5e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__rate {
    color: #c6443e;
  }

  &__teams {
    display: flex;
  }

  &__team {
    width: 85px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__player {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 2px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  &__name {
    font-size: 11px;
    color: #555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 2px;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
  }

  &__items {
    width: 96px;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-top: 2px;
    margin-right: 2px;
    overflow: hidden;

    &--empty {
      background-image: url("https://opgg-static.akamaized.net/images/pattern/opacity.1.png");
      background-repeat: repeat;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__ward {
    display: flex;
    align-items: center;
    margin-top: 7px;
    color: #353a3a;
    font-size: 11px;
    text-align: center;

    img {
      margin-right: 2px;
    }
  }
}
</style>
