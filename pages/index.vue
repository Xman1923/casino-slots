<template>
  <div class="container">
    <h2>Ana Sayfa</h2>
    <p>Casino X'e hoş geldiniz! Eğlenceli oyunlar keşfedin.</p>
    <div class="featured-games">
      <h3>Öne Çıkan Oyunlar</h3>
      <div class="games-list">
        <GameCard v-for="game in featuredGames" :key="game.id" :game="game" />
      </div>
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
      featuredGames: [
        { id: 1, name: 'Blackjack', description: 'Klasik blackjack oyunu.', image: '/images/blackjack.jpg' },
        { id: 2, name: 'Rulet', description: 'Şansınıza güvenin! Rulet oynayın.', image: '/images/roulette.jpg' },
        { id: 3, name: 'Poker', description: 'Rakiplerinizi yenin ve kazanın.', image: '/images/poker.jpg' },
      ],
    };
  },
}
</script>

<style scoped>
.featured-games {
  margin-top: 20px;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>