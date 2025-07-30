// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-auth-utils',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    url: 'http://127.0.0.1:3000'
  }
})