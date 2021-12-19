<template>
  <div class="game-item" :class="game.isWin ? 'win' : 'lose'">
    <div class="game-setting-info">
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
      <div class="game-mmr">
        <div>매치 평균</div>
        <div class="game-tier">{{ game.mmr }}</div>
      </div>
    </div>
    <div class="game-stats-items">
      <div
        class="game-stats-item"
        v-for="item in game.items"
        :key="item.imageUrl"
      >
        <img :src="item.imageUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.game-item {
  display: flex;
  margin-bottom: 8px;

  &.win {
    background-color: #a3cfec;
    border-color: #99b9cf;
  }

  &.lose {
    background-color: #e2b6b3;
    border-color: #cea7a7;
  }
}

.game-setting-info {
  display: flex;

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

.game-stats-kda {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 0 10px;

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
</style>
