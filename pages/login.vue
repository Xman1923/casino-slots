<template>
  <div class="container">
    <h2>Giriş Yap</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Kullanıcı Adı:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Şifre:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
    <p>Hesabınız yok mu? <NuxtLink to="/register">Kayıt olun</NuxtLink></p>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  setup() {
    const store = useStore();
    return { store };
  },
  methods: {
    handleLogin() {
      // Giriş yapan kullanıcı bilgilerini ayarlayın
      const user = { username: this.username }; // Gerçek bir kimlik doğrulama sistemi ile değiştirin
      this.store.dispatch('auth/login', user);
      this.$router.push('/');
    },
  },
};
</script>