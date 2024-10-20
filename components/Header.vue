<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/">Casino </NuxtLink>
    </div>
    <nav class="nav">
      <ul>
        <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
        <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
      </ul>
    </nav>
    <div class="menu-icon" @click="toggleMenu">
      <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
    <div class="mobile-menu" v-if="isMenuOpen">
      <ul>
        <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
        <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #0c0c0c;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
}

.nav ul li a {
  text-decoration: none;
  color: #0c0c0c;
  font-weight: 600;
  transition: color 0.3s;
}

.nav ul li a:hover {
  color: #ffcc00; /* Hover efekti */
}

.menu-icon {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: #0c0c0c;
}

.mobile-menu {
  position: absolute;
  top: 70px; /* Header yüksekliği */
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
}

.mobile-menu ul {
  list-style: none;
  padding: 10px;
  margin: 0;
}

.mobile-menu ul li {
  margin: 10px 0;
}

.mobile-menu ul li a {
  text-decoration: none;
  color: #0c0c0c;
  font-weight: 600;
  padding: 10px 15px;
  display: block; /* Tam genişlik */
}

.mobile-menu ul li a:hover {
  background-color: #ffcc00; /* Hover efekti */
  color: #fff; /* Yazı rengi değişimi */
}

/* Mobil stil ayarları */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
  .menu-icon {
    display: block;
  }
}
</style>