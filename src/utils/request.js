import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/token'
import { useMessage } from 'element3'
const message = useMessage()
// 创建 axios 实例
const instance = axios.create({
  baseURL: '/', // url = base url + request url
  timeout: 3000 // 请求超时
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200) {
      message({
        type:'success',
        center:true,
        message: res.msg || 'success',
        duration: 1000
      })
      return response
    }
  },
  error => {
    console.log(error)
    if (error.response) {
      // 发出了请求，并且服务器响应了状态代码，该状态代码超出了2xx的范围
      message({
        type:'error',
        center:true,
        showClose: true,
        message: error.response.data,
        duration: 0
      })
    }else if(error.request){
      // 发出请求未收到响应
      message({
        type:'error',
        center:true,
        showClose: true,
        message: error.request,
        duration: 0
      })
    }else{
      message({
        type:'error',
        center:true,
        showClose: true,
        message: error.message,
        duration: 0
      })
    }
  }
)

export default instance
