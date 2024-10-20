<template>
  <div>
    <header>
      <h1>Casino Web Sitesi</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
          <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
          <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>© 2024 Casino Web Sitesi. Tüm Hakları Saklıdır.</p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Casino Web Sitesi',
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
header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #282c34;
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>