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
    host: '0.0.0.0',// Monitor all network adapter servers to ensure that the production server can be accessed
    port: 3000 // Project port
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/icons.js',
    { src: '@/plugins/icons.js', ssr: false },
    { src: '@/plugins/vue-js-paginate.js', ssr: false },
    { src: '@/plugins/v-mask.js', ssr: false },
    { src: '@/plugins/fancybox.js', ssr: false },
    { src: '@/plugins/vue-mq.js', ssr: false },
    { src: '@/plugins/persistedState.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

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
