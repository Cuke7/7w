// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@kevinmarrec/nuxt-pwa"],
  pwa: {
    icon: {
      source: "public/icon.png"
    },
    manifest: {
      lang: 'fr',
      name: "7 wonders",
      short_name: "7W",
      display: 'standalone',
      theme_color: '#000000'
    },
  },
  nitro: {
    preset: 'netlify'
  }
});
