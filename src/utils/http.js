// axios的基础封装
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user"
import router from '@/router/index'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // timeout: 5000
})

// 请求拦截器
httpInstance.interceptors.request.use(config => {
  //1.从pinia中获取token数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  //2.按照后端要求拼接token数据
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))
//响应拦截器
httpInstance.interceptors.response.use(res => res.data,
  e => {
    const userStore = useUserStore()
    //统一错误提示
    ElMessage.error(e.response.data.message)
    //401 token失效处理
    if (e.response.status === 401) {
      //1.清除本地用户数据
      userStore.clearUserInfo()
      //2.返回至登录页
      router.replace('/Login')
    }
    return Promise.reject(e)
  })
export default httpInstance