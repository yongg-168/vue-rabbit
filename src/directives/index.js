//定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
  install(app) {
    //懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el :指令绑定的那个元素 img
        // binding ：binding.value 指令等于号后面绑定的表达式的值 图片url

        //判断某个dom元素是否进入视口区域
        const { stop } = useIntersectionObserver(
          el,
          ([entry]) => {
            // console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
              //进入视口区域
              el.src = binding.value
              //停止监听，防止资源浪费
              stop()
            }
          },
        )
      }
    })
  }
}