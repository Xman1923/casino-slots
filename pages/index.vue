<template>
  <div class="homepage">
    <h2>Hoş Geldiniz!</h2>
    <p>En iyi casino deneyimini yaşamak için buradayız.</p>
    <NuxtLink to="/games" class="cta-button">Oyunlara Göz Atın</NuxtLink>
  </div>
</template>

<style scoped>
.homepage {
  text-align: center;
  padding: 50px 0;
}

.cta-button {
  background-color: #ffcc00;
  padding: 15px 30px;
  border-radius: 5px;
  color: #0c0c0c;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e6b800;
}
</style>