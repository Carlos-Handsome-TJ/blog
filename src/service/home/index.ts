import http from '@/service/http'

export const userInfo = () => {
  return http.get('/user/userInfo')
}