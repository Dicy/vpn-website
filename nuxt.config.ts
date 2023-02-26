// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'DicyVPN',
      meta: [
        {
          name: 'description',
          content: 'La VPN che bypassa la maggior parte dei blocchi. Mantieni la tua privacy nascondendo il tuo IP reale, non salviamo log degli accessi. Perfetta se hai giochi online bloccati'
        }
      ],
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'}
      ]
    }
  }
})
