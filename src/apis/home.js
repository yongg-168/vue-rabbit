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