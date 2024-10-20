<template>
  <header class="header">
    <div class="container">
      <h1>Casino X</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
          <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
          <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>