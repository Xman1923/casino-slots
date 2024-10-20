<template>
  <div class="game-card" @click="navigateToGame">
    <img :src="game.image" alt="Game Image" class="game-image" />
    <div class="game-info">
      <h3>{{ game.name }}</h3>
      <p>{{ game.description }}</p>
      <NuxtLink :to="`/games/${game.id}`" class="play-button">Oyna</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToGame() {
      this.$router.push(`/games/${this.game.id}`);
    },
  },
}
</script>

<style scoped>
.game-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.game-info {
  text-align: center;
}

.play-button {
  background-color: #ffcc00;
  padding: 10px 20px;
  border-radius: 5px;
  color: #0c0c0c;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.play-button:hover {
  background-color: #e6b800;
}
</style>