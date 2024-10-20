<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Casino X. Tüm hakları saklıdır.</p>
      <ul class="footer-links">
        <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
        <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0c0c0c;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  display: inline;
  margin: 0 15px;
}

.footer-links li a {
  color: white;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}
</style>