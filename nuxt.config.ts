// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  modules:[
    'nuxt-swiper',
    '@element-plus/nuxt'
  ],
  css:[
    '@/assets/styles/reset.scss',
    '@/assets/styles/global.scss',
    '@/assets/styles/fonts.scss',
    'material-icons/iconfont/material-icons.css',
  ],
  app: {
    head: {
      title:'페이오티',
      meta:[
        {charset:'utf-8'},
        {name:'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'},
      ],
      script: [],
    },
  },

})
