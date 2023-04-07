import elementPlus from 'element-plus'

import "element-plus/dist/index.css";

export default defineNuxtPlugin(app => {
  app.vueApp.use(elementPlus)
})
