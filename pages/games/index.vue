<template>
  <div class="games">
    <h2>Oyunlar</h2>
    <div class="games-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
import GameCard from '~/components/GameCard.vue';

export default {
  components: {
    GameCard
  },
  data() {
    return {
      games: [
        { id: 1, name: 'Blackjack', description: 'Klasik blackjack oyunu.' },
        { id: 2, name: 'Rulet', description: 'Şansınıza güvenin! Rulet oynayın.' },
        { id: 3, name: 'Poker', description: 'Rakiplerinizi yenin ve kazanın.' }
      ]
    };
  }
}
</script>

<style scoped>
.games {
  padding: 20px;
}

.games-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>