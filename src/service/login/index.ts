import http from '@/service/http'

export const login = (data: any) => {
  return http.post('/user/login', data)
}