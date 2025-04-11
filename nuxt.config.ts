// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: ['en'],
    defaultLocale: 'en',
  },
  app: {
    head: {
      title: 'Thronglets Game',
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-0CNSYLJQ3V",
          async: true,
        },
        { src: "/js/analytics.js" }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no' },
        { name: 'description', content: 'Dive into Thronglets, the virtual pet game from Black Mirror Season 7 on Netflix. Manage your growing Thronglet society, face tough choices, and uncover dark secrets in this part pet-sim, part strategy existential adventure.' },
        { name: 'keywords', content: 'Thronglets Game'}
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://thronglets.online/'
        }
      ]
    },
  },
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})