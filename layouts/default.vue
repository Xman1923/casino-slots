<template>
  <div>
    <Header />
    <main class="main-content">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
  background: #f9f9f9;
  min-height: calc(100vh - 120px);
}
</style>
```

### `components/Header.vue`
```vue
<template>
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
</template>

<style scoped>
.header {
  background-color: #0c0c0c;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  padding: 0;
}

.nav-links li {
  display: inline;
  margin: 0 15px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #ffcc00;
}
</style>
```

### `components/Footer.vue`
```vue
<template>
  <footer class="footer">
    <p>© 2024 Casino X. Tüm Hakları Saklıdır.</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0c0c0c;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>