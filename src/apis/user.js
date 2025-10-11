//配置与用户相关的接口
import request from '@/utils/http'
export const loginAPI = ({ account, password }) => {
  return request({
    method: 'POST',
    url: '/login',
    data: {
      account,
      password
    }
  })
}