//管理购物车相关的数据
import { computed, ref } from "vue"
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
  //删除购物车
  const deleteCart = (skuId) => {
    //1.用splice获取下标删除
    // const index = cartList.value.findIndex((i) => i.skuId === skuId)
    // cartList.value.splice(index, 1)
    //2.用filter过滤数组
    cartList.value = cartList.value.filter(i => i.skuId !== skuId)
  }

  //单选功能：
  const singleCheck = (skuId, selected) => {
    //通过skuid找到要修改的哪一项，然后把他的selected值给cartList
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  //getter 计算属性
  const allCount = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count, 0))
  const allPrice = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count * cur.price, 0))
  return {
    cartList,
    allCount,
    allPrice,
    addCart,
    deleteCart,
    singleCheck
  }
}, {
  persist: true
})