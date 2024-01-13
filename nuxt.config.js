export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'city-deft',
    htmlAttrs: {
      lang: 'ru'
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.scss'
  ],
  styleResources: {
    scss: [
      '~/assets/css/style.scss',
    ],
  },

  axios: {
    baseURL: process.env.APP_BASE_URL
  },

  server: {
    host: '127.0.0.1', // Прослушивает все сетевые интерфейсы
    port: 3000 // Или любой другой порт, который вы предпочитаете
  },

  generate: {
    crawler: false
  },
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/icons.js',
    { src: '@/plugins/icons.js', ssr: false },
    { src: '@/plugins/vue-js-paginate.js', ssr: false },
    { src: '@/plugins/fancybox.js', ssr: false },
    { src: '@/plugins/persistedState.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxt/image',
    ["vue-toastification/nuxt", {
      timeout: 2000,
      draggable: false
    }]
  ],

  image: {
    quality: 70,
    dir: 'assets/img'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
