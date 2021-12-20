<template>
  <div
    class="match-game-item"
    :class="game.isWin ? 'match-game-item--win' : 'match-game-item--lose'"
  >
    <div class="match-game-item__result">
      <div class="match-game-item__result-type">
        {{ game.gameType }}
      </div>
      <div class="match-game-item__result-time">
        {{ getDateFromNow }}
      </div>
      <div
        class="match-game-item__result-info"
        :class="
          game.isWin
            ? 'match-game-item__result-info--win'
            : 'match-game-item__result-info--lose'
        "
      >
        {{ game.isWin ? "승리" : "패배" }}
      </div>
      <div class="match-game-item__result-duration">
        {{ duration }}
      </div>
    </div>
    <div class="match-game-item__setting">
      <div class="champion">
        <img :src="game.champion.imageUrl" alt="" />
      </div>
      <div class="spells">
        <img
          v-for="spell in game.spells"
          :key="spell.imageUrl"
          :src="spell.imageUrl"
          alt=""
        />
      </div>
      <div class="runes">
        <img v-for="peak in game.peak" :key="peak" :src="peak" alt="" />
      </div>
    </div>
    <div class="game-stats-kda">
      <div class="stats-kda">
        <span class="stats-kda-kill">{{ game.stats.general.kill }}</span>
        /
        <span class="stats-kda-death">{{ game.stats.general.death }}</span>
        /
        <span class="stats-kda-assist">{{ game.stats.general.assist }}</span>
      </div>
      <div class="stats-kda-ratio">
        <span>{{ game.stats.general.kdaString }}</span>
        평점
      </div>
      <div class="stats-badges">
        <div
          class="stats-badge stats-multikill"
          v-if="game.stats.general.largestMultiKillString"
        >
          {{ game.stats.general.largestMultiKillString }}
        </div>
        <div
          class="stats-badge stats-opscore"
          :class="game.stats.general.opScoreBadge.toLowerCase()"
          v-if="game.stats.general.opScoreBadge"
        >
          {{ game.stats.general.opScoreBadge }}
        </div>
      </div>
    </div>
    <div class="game-stats-detail">
      <div class="game-level">레벨 {{ game.champion.level }}</div>
      <div class="game-cs">
        {{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS
      </div>
      <div class="game-kill-rate">
        킬관여 {{ game.stats.general.contributionForKillRate }}
      </div>
      <!-- <div class="game-mmr">
        <div>매치 평균</div>
        <div class="game-tier">{{ game.mmr }}</div>
      </div> -->
    </div>
    <div class="game-stats-items">
      <div class="game-stats-items__container">
        <div class="game-stats-item" v-for="i in 7" :key="i">
          <img
            v-if="i < game.items.length"
            :src="game.items[i].imageUrl"
            alt=""
          />
          <div v-else class="game-stats-no-item"></div>
        </div>
      </div>
      <div class="game-stats-ward">
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
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    game: {
      type: Object,
    },
  },
  computed: {
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
};
</script>

<style lang="scss">
.match-game-item {
  display: flex;
  margin-bottom: 8px;
  height: 96px;

  &--win {
    background-color: #a3cfec;
    border-color: #99b9cf;
  }

  &--lose {
    background-color: #e2b6b3;
    border-color: #cea7a7;
  }

  &__result {
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: #555;

    &-type {
      font-weight: bold;
    }

    &-type,
    &-time {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    &-info {
      font-weight: bold;

      &--win {
        color: #1a78ae;
      }

      &--lose {
        color: #c6443e;
      }
    }
  }

  &__setting {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;

    .champion {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .spells,
    .runes {
      display: flex;
      flex-direction: column;
      margin-left: 4px;

      img {
        width: 22px;
      }
    }
  }
}

.game-stats-kda {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;

  .stats-kda {
    font-size: 15px;
    color: #879292;

    span {
      font-weight: bold;
    }

    .stats-kda-kill,
    .stats-kda-assist {
      color: #555e5e;
    }

    .stats-kda-death {
      color: #c6443e;
    }
  }

  .stats-kda-ratio {
    font-size: 12px;
    font-weight: bold;
    color: #353a3a;
  }

  .stats-badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .stats-badge {
      color: #f2f2f2;
      border-radius: 15px;
      padding: 2px 5px;
      font-size: 10px;
      margin-top: 8px;

      &:nth-child(n + 2) {
        margin-left: 4px;
      }
    }

    .stats-multikill {
      background: #ee5a52;
      border: 1px solid #c6443e;
    }

    .stats-opscore {
      &.mvp {
        background-color: #e19205;
        border: 1px solid #b88a2a;
      }

      &.ace {
        background-color: #8c51c5;
        border: solid 1px #7f3590;
      }
    }
  }
}

.game-stats-detail {
  width: 90px;
  font-size: 11px;
  color: #555e5e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .game-kill-rate {
    color: #c6443e;
  }
}

.game-stats-items {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__container {
    width: 96px;
    display: flex;
    flex-wrap: wrap;

    .game-stats-item {
      width: 22px;
      height: 22px;
      border-radius: 3px;
      margin-top: 2px;
      margin-right: 2px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }

      .game-stats-no-item {
        width: 100%;
        height: 100%;
        background-image: url("https://opgg-static.akamaized.net/images/pattern/opacity.1.png");
      }
    }
  }

  .game-stats-ward {
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
