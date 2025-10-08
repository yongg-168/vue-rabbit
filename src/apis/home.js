import httpInstance from "@/utils/http"

//获取banner
export const getBannerAPI = () => {
  return httpInstance({
    url: '/home/banner'
  })
}

//获取新鲜好物 new
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

export const findProductsApi = () => {
  return httpInstance({
    url: '/home/goods'
  })
}