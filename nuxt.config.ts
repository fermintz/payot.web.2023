
export default defineNuxtConfig({
  ssr:false,
  modules:[

    'nuxt-swiper',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],
  css:[
    '@/assets/styles/global.scss',
    '@/assets/styles/fonts.scss',
    'material-icons/iconfont/material-icons.css',
  ],
  
  build:{
    transpile:['chart.js']
  },

  app: {
    head: {
      title:'페이오티',
      meta:[
        {charset:'utf-8'},
        {name:'viewport', content: 'width=device-width, initial-scale=1'}
      ],
      script: [
        {
          type: "text/javascript",
          /**
           * 링크의 파라미터에 AutoLoad가 되지 않게끔 설정해줘야 로드시 문제가 발생되지 않음
           * &autoload=false
           */
          src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=8180df1c5b5b6f3d47b1b60dfe933654&autoload=false",
          defer: true,
        },
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'},
      ],

    },
  },


 

})
