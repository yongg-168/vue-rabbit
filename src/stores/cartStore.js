//管理购物车相关的数据
import { computed, ref } from "vue"
import { defineStore } from "pinia"
import { useUserStore } from "./user"
import { findNewCartListAPI, insertCartAPI, deleteCartAPI } from "@/apis/cart"

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isToken = computed(() => userStore.userInfo.token)

  //state 数据
  const cartList = ref([])
  //action 
  //获取最新购物车列表
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isToken.value) {
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
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
  }

  //删除购物车
  const deleteCart = async (skuId) => {
    if (isToken.value) {
      //调用接口实现接口购物车的删除功能
      await deleteCartAPI([skuId])
      updateNewList()
    }
    else {
      //1.用splice获取下标删除
      // const index = cartList.value.findIndex((i) => i.skuId === skuId)
      // cartList.value.splice(index, 1)
      //2.用filter过滤数组
      cartList.value = cartList.value.filter(i => i.skuId !== skuId)
    }
  }

  //单选功能：
  const singleCheck = (skuId, selected) => {
    //通过skuid找到要修改的哪一项，然后把他的selected值给cartList
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  //全选功能
  const allCheck = (selected) => {
    cartList.value.forEach((item) => item.selected = selected)
  }
  //getter 计算属性
  //1.总的数量 count之和
  const allCount = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count, 0))
  //2.总的价钱 price之和
  const allPrice = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count * cur.price, 0))
  //3.已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((acc, cur) => acc + cur.count, 0))
  //4.已选择价钱之和
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((acc, cur) => acc + cur.count * cur.price, 0))
  //是否全选  当所有单选框都是选中状态时，全选矿选中
  const isAll = computed(() => cartList.value.every(item => item.selected))
  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    addCart,
    deleteCart,
    singleCheck,
    allCheck
  }
}, {
  persist: true
})