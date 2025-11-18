// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()    
    ]
  },
  css: ['@/assets/css/main.css'],
  srcDir: './',
  alias: {
    '@': './',
    '~': './',
    'assets': './assets',
    'public': './public'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo-portfolio.png' }
      ],
      title: 'Anthony Enedah Portfolio',
      meta: [
        {
          name: 'keywords',
          content: 'Anthony Enedah, Anthony Enedah portfolio, software engineer'
        },
        {
          name: 'description',
          content: 'Anthony is a software engineer that focuses on front end web development. His tech stack is tailwindss, gsap, vuejs and nuxtjs'
        },
        {
          name: 'author',
          content: 'Anthony Enedah'
        }
      ]
    }
  }
})
