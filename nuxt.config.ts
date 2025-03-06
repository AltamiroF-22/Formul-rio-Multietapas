export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Módulo TailwindCSS
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css','vuetify/styles'],
  
  // Plugins do Vuetify
  plugins: ['~/plugins/vuetify.js'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: 'Formulário Multietapas',
      meta: [
        {
          name: 'description',
          content: 'Complete seu formulário de forma simples e organizada, avançando por etapas intuitivas para uma melhor experiência de preenchimento.'
        },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }    
  }
})