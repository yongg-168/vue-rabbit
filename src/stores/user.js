//管理用户数据相关
import { defineStore } from "pinia"
import { ref } from "vue"
import { loginAPI } from "@/apis/user"
export const useUserStore = defineStore('user', () => {
  //1.定义管理用户数据的state
  const userInfo = ref({})
  //2.定义获取接口的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }

  //退出登录时，清除pinia数据
  const clearUserInfo = () => {
    userInfo.value = {}
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