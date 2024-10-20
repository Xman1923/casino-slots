<template>
  <div class="game-card" @click="navigateToGame">
    <img :src="game.image" alt="Game Image" class="game-image" />
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
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-align: center;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
}
</style>