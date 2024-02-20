import axios from 'axios'
import router from '@/router'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  }
})

http.interceptors.request.use(config => {
  const userInfo = localStorage.getItem('userInfo') || '{}'
  const { token } = JSON.parse(userInfo)?.data || ''
  config.headers.Authorization = token
  return config
}, err => {
  return Promise.reject(err)
})
http.interceptors.response.use(res => {
  const { data } = res
  return data
}, async err => {

  if (err.response.status === 401) {
    // 登录过期
    await router.push('/login')
  }
  return Promise.reject(err)
})

export default http