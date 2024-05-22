import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
  }
})
