<template>
  <div class="app-container">
    <header class="header">
      <h1 class="logo">Casino X</h1>
      <nav class="nav">
        <ul class="nav-links">
          <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
          <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
          <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <NuxtPage />
    </main>

    <footer class="footer">
      <p>© 2024 Casino X. Tüm Hakları Saklıdır.</p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Casino X',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Casino oyunlarıyla eğlenceli bir deneyim yaşayın.' }
      ]
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #0c0c0c;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #ffcc00;
}

.main-content {
  flex: 1;
  padding: 20px;
  background: #ffffff;
}

.footer {
  background-color: #0c0c0c;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>