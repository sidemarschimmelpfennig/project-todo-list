// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint'],

  css: ['~/assets/css/tailwind.css'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },

  alias: {
    '@components': './app/components'
  }
})
