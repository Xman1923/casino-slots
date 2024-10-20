<template>
  <header class="header">
    <h1>Basit Casino</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/">Ana Sayfa</NuxtLink></li>
        <li><NuxtLink to="/about">Hakkında</NuxtLink></li>
        <li><NuxtLink to="/games">Oyunlar</NuxtLink></li>
        <li v-if="!isAuthenticated"><NuxtLink to="/login">Giriş Yap</NuxtLink></li>
        <li v-if="!isAuthenticated"><NuxtLink to="/register">Kayıt Ol</NuxtLink></li>
        <li v-if="isAuthenticated" @click="logout">Çıkış Yap</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
    
    const logout = () => {
      store.dispatch('auth/logout');
      // Burada bir yönlendirme yapabilirsiniz.
    };

    return { isAuthenticated, logout };
  },
};
</script>