// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: `page`, mode: `out-in` },
  },
  modules: [
    `@nuxt/eslint`,
    `@nuxt/ui`,
    `@nuxt/devtools`,
    `@nuxtjs/supabase`,
    `@nuxtjs/cloudinary`,
    `@tresjs/nuxt`,
  ],

  supabase: {
    redirectOptions: {
      login: `/`, // Désactive la redirection vers la page de connexion
      callback: `/confirm`, // Garde la redirection vers la page de callback
      include: undefined,
      exclude: [`/`, `/introduction`], // N'applique pas de redirection pour cette page
      cookieRedirect: false,
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
      },
    },
    cloudinary: {
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  tres: {
    glsl: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },

  colorMode: {
    preference: `light`,
  },

  compatibilityDate: `2024-04-03`,
});
