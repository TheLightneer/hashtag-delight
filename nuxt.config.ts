// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon', 
    '@hypernym/nuxt-anime', 
    '@nuxtjs/google-fonts', 
    '@pinia/nuxt',
  ],
  googleFonts: {
    // Options
    families: {
      Poppins: {
        wght: [200, 400, 700],
        ital: [400, 700]
      },
    },
  }
})
