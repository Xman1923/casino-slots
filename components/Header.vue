<template>
  <header class="header">
    <h1 class="logo">Casino X</h1>
    <nav>
      <ul class="nav-links">
        <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
        <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
        <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #0c0c0c;
  color: white;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  margin-left: auto;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
</style>