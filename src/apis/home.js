import httpInstance from "@/utils/http"

//获取banner
export const getBannerAPI = (params = {}) => {
  //默认是1，商品为2  ，1为首页，2为分类商品页
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite,
    }
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