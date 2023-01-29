import axios from 'axios' 
//axios响应头，直接copy官方文档
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios接口地址 本地就是localhost,使用时替换成后端的地址就行了
axios.defaults.baseURL = '//localhost:3006' 
// axios.defaults.baseURL = '//localhost:3006' 
 
//声明一个function request 用于封装axios，他接受一个url，type和data
export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
    }
    //tolowercase转换成小写===get的话
    if(type.toLowerCase() === 'get') {
        //`params` 是即将与请求一起发送的 URL 参数
      option.params = data
      //否则的话就等于自己输入的data
    }else {
      option.data = data
    }
    //如果有token
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }

    axios(option).then(res => {
      console.log(res.data)
      //如果res.data.status的状态为ok且本地的token和res.data.token一样那么就resolve
      if(res.data.status === 'ok') {
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
        //否则的话就message错误然后reject
      }else{
        // Message.error(res.data.msg)
        reject(res.data)
      }
      //捕获异常，如果什么都不是那就网络异常
    }).catch(err => {
    //   Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
} 
//使用方式  
// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data) 
//   }) 