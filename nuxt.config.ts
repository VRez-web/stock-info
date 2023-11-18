// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Stock Info",
    },
  },
  devtools: {enabled: true},
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      prefix: 'Prime'
    }
  },
  css: [
    'primevue/resources/themes/viva-light/theme.css',
    '@/assets/styles/main.scss',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
})
