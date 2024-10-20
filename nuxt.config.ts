// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true }, // Ana sayfayı önceden oluştur
    '/games': { prerender: true }, // Oyunlar sayfasını da önceden oluştur
    '/about': { prerender: true }, // Hakkında sayfasını da önceden oluştur
    '/games/*': { prerender: true }, // Oyun detay sayfalarını da önceden oluştur
  },
  css: [
    // Global CSS dosyaları burada eklenebilir
    '~/assets/styles/global.css', // Örneğin global.css dosyasını ekleyebilirsiniz
  ],
  head: {
    title: 'Casino X',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Casino oyunlarıyla eğlenceli bir deneyim yaşayın.' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        integrity: 'sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMH6w8Dg1W8qW8sdU5zD+T1k8dE8O+O/x3p0W2',
        crossorigin: 'anonymous'
      }
    ],
  },
});