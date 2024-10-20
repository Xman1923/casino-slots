<template>
  <div class="games">
    <h2>Oyunlar</h2>
    <div v-if="loading" class="loading">Yükleniyor...</div>
    <div v-else class="games-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<script>
import GameCard from '~/components/GameCard.vue';

export default {
  components: {
    GameCard,
  },
  data() {
    return {
      games: [],
      loading: true,
    };
  },
  async mounted() {
    // Simulate API call
    setTimeout(() => {
      this.games = [
        { id: 1, name: 'Blackjack', description: 'Klasik blackjack oyunu.', image: '/images/blackjack.jpg' },
        { id: 2, name: 'Rulet', description: 'Şansınıza güvenin! Rulet oynayın.', image: '/images/roulette.jpg' },
        { id: 3, name: 'Poker', description: 'Rakiplerinizi yenin ve kazanın.', image: '/images/poker.jpg' },
      ];
      this.loading = false;
    }, 2000);
  },
}
</script>

<style scoped>
.games {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 18px;
  text-align: center;
  color: #888;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>