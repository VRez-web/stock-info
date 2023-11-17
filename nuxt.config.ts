// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Stock Info",
    },
  },
  theme:'light',
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
    components: {
      prefix: 'Prime'
    }
  },
  css: ['primevue/resources/themes/viva-light/theme.css']
})
