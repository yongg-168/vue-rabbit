//管理购物车相关的数据
import { ref } from "vue"
import { defineStore } from "pinia"
export const useCartStore = defineStore('cart', () => {
  //state 数据
  const cartList = ref([])
  //action 
  const addCart = (goods) => {
    //添加购物车操作
    //已添加，count加
    const item = cartList.value.find((item) => item.skuId === goods.skuId)
    if (item) {
      //对象是引用数据类型，修改item，cartList的数据也会发生改变
      item.count += goods.count
    } else {
      //未添加，直接push
      cartList.value.push(goods)
    }
  }
  return {
    cartList,
    addCart
  }
}, {
  persist: true
})