//管理用户数据相关
import { defineStore } from "pinia"
import { ref } from "vue"
import { loginAPI } from "@/apis/user"
import { useCartStore } from "./cartStore"
export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  //1.定义管理用户数据的state
  const userInfo = ref({})
  //2.定义获取接口的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    //合并购物车
    cartStore.mergeCart()
    //登陆时，获取购物车信息
    cartStore.updateNewList()
  }

  //退出登录时，清除pinia数据
  const clearUserInfo = () => {
    userInfo.value = {}
    //退出时，清理购物车
    cartStore.clearCart()
  }
  //3.以对象的形式把state和action返回出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})