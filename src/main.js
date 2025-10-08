// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.directive('img-lazy', {
  mounted(el, binding) {
    //el :指令绑定的那个元素 img
    // binding ：binding.value 指令等于号后面绑定的表达式的值 图片url

    //判断某个dom元素是否进入视口区域
    useIntersectionObserver(
      el,
      ([entry]) => {
        // console.log(entry.isIntersecting)
        if (entry.isIntersecting) {
          //进入视口区域
          el.src = binding.value
        }
      },
    )
  }
})