// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  app: {
    head: {
      title: 'Cabana Movie App',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    },
  },
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    // We use the public runtime config in
    //order to expose this also to the client side
    public: {
      imgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL,
    },
  },
  devServerHandlers: [],
});
