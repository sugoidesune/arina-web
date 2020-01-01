

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Readium' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap' },
    ],
    script: [
      {src: 'https://kit.fontawesome.com/5b47744dec.js', crossorigin:'anonymous'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  "~assets/scss/main.scss"
],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-instagram', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
  '@nuxtjs/axios',
  ['bootstrap-vue/nuxt',{
    componentPlugins: [
      'NavbarPlugin',
      'LayoutPlugin',
      'ButtonPlugin',
      'FormPlugin',
      'FormInputPlugin',
      'CarouselPlugin'
    ],
  }],
  ['nuxt-i18n', {
    vueI18nLoader: true, //load from i18n tags within .vue files
    strategy: 'prefix_except_default',
    defaultLocale: 'en', // routing default
    vueI18n: {
      fallbackLocale: 'en'
    },
    locales: [ //routing possible languages
      'fr',
      'ja',  
      'en' // Make sure that defualt locale is the last one!!!
    ]
  }],
  ['@nuxtjs/style-resources']
],
styleResources: {
  scss: ["~assets/scss/variables.scss"]
},
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    //'vue-instagram'
   // ['@nuxtjs/google-gtag', { id: 'UA-41622771-4', debug: true, config: {send_page_view: true} }],
  ],

  /*
  ** Build configuration
  */
  build: {
    build: {
      extend(config) {
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: "javascript/auto",
          loader: ["@kazupon/vue-i18n-loader", "yaml-loader"],
        });
      },
    }
  },
  router :{
    base: process.env.NODE_ENV === "development" ? '/' : '/readium/'
  },
  generate: {
    dir: process.env.generateFolder || 'dist'
  }
};
