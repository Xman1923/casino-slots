<template>
  <div class="game-card">
    <h3>{{ game.name }}</h3>
    <p>{{ game.description }}</p>
    <NuxtLink :to="`/games/${game.id}`" class="play-button">Oyna</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.game-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.play-button {
  background-color: #ffcc00;
  padding: 10px 20px;
  border-radius: 5px;
  color: #0c0c0c;
  text-decoration: none;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #e6b800;
}
</style>