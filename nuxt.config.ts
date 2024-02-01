const isProd = process.env.NODE_ENV === 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: process.env.NUXT_TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'keywords', content: '网站，后台，官网,小程序' },
        { name: 'description', content: '春花，秋月，夏日，冬雪。你若盛开，清风自来。心若浮沉，浅笑安然。' },
        { name: 'format-detection', content: 'telephone=no' }
        // pc 等比例缩放
        // { name: 'viewport', content: 'user-scalable=yes' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      style: [],
      script: [
        // { src: '//cdn.jsdelivr.net/npm/eruda', type: 'text/javascript' },
        // { children: 'eruda.init();', type: 'text/javascript' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    }
    // pageTransition: false,
    // layoutTransition: false
  },
  sourcemap: false,
  typescript: { strict: false, shim: false },
  modules: ['@vueuse/nuxt', '@nuxt/image', 'dayjs-nuxt', '@nuxt/ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/style/scss/main.scss', '~/assets/style/scss/Animation.scss','~/assets/style/fonts/font.css','~/assets/style/fonts/iconfont.css'],
  // 此处配置的目录中的任何组件都可以在整个页面、布局（和其他组件）中使用，而无需显式导入它们。
  imports: { dirs: ['types', 'stores', 'api'] },
  build: { transpile: [/echarts/] },
  dayjs: {
    locales: ['en', 'zh-cn'],
    defaultLocale: 'zh-cn'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/scss/theme.scss" as *;'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      commonjsOptions: { transformMixedEsModules: true }
    },

    esbuild: {
      drop: isProd ? ['console', 'debugger'] : []
    }
  },
  runtimeConfig: {
    public: {
      api: {
        baseUrl: process.env.NUXT_PUBLIC_API_BASEURL
      }
    }
  },
  // postcss: {
  //   plugins: {
  //     // 这个工具可以实现自动添加CSS3前缀
  //     autoprefixer: {
  //       overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8']
  //     },
  //     'postcss-px-to-viewport': {
  //       unitToConvert: 'px', // 要转化的单位
  //       viewportWidth: 1920, // UI设计稿的宽度
  //       unitPrecision: 6, // 转换后的精度，即小数点位数
  //       propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  //       viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  //       fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  //       selectorBlackList: [], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
  //       minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  //       mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  //       replace: true, // 是否转换后直接更换属性值
  //       exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
  //       landscape: false // 是否处理横屏情况
  //     }
  //   }
  // },

  // 解决 eruda 服务端控制台报错问题
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    devProxy: {
      host: '127.0.0.1'
    }
  }
})
