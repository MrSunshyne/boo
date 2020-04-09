export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color

   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/date.js'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
    // '~/modules/crawler/'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    "@nuxtjs/svg"
  ],
  build: {
    /*
     ** You can extend webpack config here
     */

    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-color-function': {},
        'postcss-url': false,
        tailwindcss: 'tailwind.config.js',
        'postcss-nested': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {}
      }
    },
    extend(config, ctx) {
      for (let rule of config.module.rules) {
        if (rule.test.test('.css')) {
          config.module.rules.push({
            test: /\.postcss/,
            oneOf: rule.oneOf
          })
        }
      }

      return config
    }
  },
  router: {
    base: '/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'PostIndex',
        path: '/blog/page/:pageNumber',
        component: resolve(__dirname, 'pages/blog/index.vue')
      })

      // routes.push({
      //   name: 'TagIndex',
      //   path: '/tag/:slug/page/:pageNumber',
      //   component: resolve(__dirname, 'pages/tag/_slug.vue')
      // })

      // routes.push({
      //   name: 'AuthorIndex',
      //   path: '/author/:slug/page/:pageNumber',
      //   component: resolve(__dirname, 'pages/author/_slug.vue')
      // })
    }
  },
  hooks: {
    generate: {
      routeCreated({ route, path, errors }) {
        console.log(route)
        console.log(path)
        console.log(errors)
      }
    }
  }
}
