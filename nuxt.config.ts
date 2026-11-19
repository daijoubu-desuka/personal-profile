// nuxt.config.ts

export default defineNuxtConfig({
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',

  experimental: {
    appManifest: false,
  },

  nitro: {
    publicAssets: [
      {
        dir: 'app/public',
        maxAge: 0,
      },
      {
        dir: 'public',
        maxAge: 0,
      },
    ],
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      title: 'Anthony Namog Adlawon — Information Technology | CSU Main Campus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Personal academic portfolio of Anthony Namog Adlawon – BSIT student at Caraga State University Main Campus exploring web systems, software architectures, and modern development.',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
