<template>
  <div class="app-container">
    <header class="header">
      <h1 class="logo">Casino X</h1>
      <button @click="toggleMenu" class="menu-toggle">
        <span v-if="!menuOpen">☰</span>
        <span v-if="menuOpen">✖</span>
      </button>
      <nav :class="['nav', { 'is-active': menuOpen }]">
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
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
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

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.nav {
  display: none;
}

.nav.is-active {
  display: block;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
  margin: 10px 0;
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

/* Mobil Tasarım için Stil */
@media (max-width: 600px) {
  .nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #0c0c0c;
    width: 100%;
    padding: 20px;
    border-top: 2px solid #ffcc00;
    z-index: 1000;
  }
  
  .nav-links li {
    margin: 10px 0;
    text-align: center;
  }
}
</style>