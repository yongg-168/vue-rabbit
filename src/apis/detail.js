import httpInstance from "@/utils/http"

//基础数据
export const getDetailAPI = (id) => {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}

//热榜区域
/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const getDetailHotAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}