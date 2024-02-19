import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=utf-8'
  }
})

http.interceptors.request.use(config => {
  const userInfo = localStorage.getItem('userInfo') || '{}'
  const { token }  = JSON.parse(userInfo)?.data || ''
  config.headers.Authorization = token
  return config
}, err => {
  return Promise.reject(err)
})
http.interceptors.response.use(res => {
  const { data } = res
  return data
}, err => {
  return Promise.reject(err)
})

export default http