// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /// Khai báo các cấu hình cho web
  app: {
    head: {
      title: 'Demo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My Nuxt App' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  ssr: false,
  srcDir: 'src',
  /// Các thông số của bản dev...
  $development: {
    app: {
      head: { title: 'Dev -Demo' },
    }
  },
$production: {
  app: {
    head: { title: 'Production - Demo' },
  }
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', "@ant-design-vue/nuxt", '@ant-design-vue/nuxt'],
  antd:{
    // Options
  }
})