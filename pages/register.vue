<template>
  <div class="container">
    <h2>Kayıt Ol</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Kullanıcı Adı:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Şifre:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
    <p>Zaten bir hesabınız var mı? <NuxtLink to="/login">Giriş yapın</NuxtLink></p>
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
    handleRegister() {
      // Burada kayıt işlemi gerçekleştirin (API çağrısı ile).
      alert('Kayıt işlemi başarılı!'); // Gerçek kayıt işlemi ile değiştirin
      this.$router.push('/login');
    },
  },
};
</script>