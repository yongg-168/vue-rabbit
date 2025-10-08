import httpInstance from "@/utils/http"
//一级分类：面包屑导航
export const getCategoryAPI = (id) => {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}
//二级分类面包屑导航
export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}