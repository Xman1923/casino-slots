<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Genel stil ayarları */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>