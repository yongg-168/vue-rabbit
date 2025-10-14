//关于购物车的接口
import request from '@/utils/http'
//1.加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: 'member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//2.获取最新的购物车列表
export const findNewCartListAPI = () => {
  return request({
    url: 'member/cart'
  })
}
//3.删除购物车商品
export const deleteCartAPI = (ids) => {
  return request({
    url: 'member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}