export default {
  ssr: false,
  target: 'static',
  css: [
    '@/assets/css/tail.css'
  ],

  head: {
    title: 'STARTER KIT NUXT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxt/postcss8'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  axios: {
    proxy: true,
    credentials: true
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'backendURLhere'
      }
    }
  },
  middleware: 'auth',

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  pageTransition: 'app',
  layoutTransition: 'app'
}
