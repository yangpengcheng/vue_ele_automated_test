import router from './router'
import store from './store'
// import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/token'

// 无需验证的路由
const noAuthPath = ['/login']

router.beforeEach(async(_to,_from,next) =>{
  // 获取文档标题
  // console.log(_from.path,_to.path)
  // document.title = getPageTitle(_to.meta.title)
  // 确定用户是否已登录
  const hasToken = getToken()
  if(hasToken){
    if(_to.path === '/login'){
      // 如果用户已登录,重定向到主页
      next({path:'/'})
    }else{
      const permissions = store.state.user.permissions
      const userPermissions = permissions && permissions.length > 0
      if(userPermissions){
        next()
      }else{
        try{
          // 获取用户信息
          const { permissions } = await store.dispatch('user/getInfo')
          // 根据用户权限获取可以访问的路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', permissions)
          // 动态添加可访问路由
          accessRoutes.map((item)=>{
            router.addRoute(item)
          })
          // hack方法以确保addRoutes是完整的
          //设置replace：true，因此导航不会留下历史记录
          next({ ..._to, replace: true })
        }catch(error){
          await store.dispatch('user/resetToken')
          console.log('获取用户信息失败',error)
          // next(`/login?redirect=${_to.path}`)      // 使用hash模式时可以使用，下同
          next({ path: '/login',query:{redirect:`${_to.path}`}}) // history 模式必须使用下面这种方式，下同
        }
      }// end if(userPermissions)
    } // end if(_to.path === '/login')
  }else{
    // 无令牌,无需验证的路由，不拦截
    if(noAuthPath.indexOf(_to.path) !== -1){
      next()
    }else{
      // 重定向到login页面，登录成功后跳转到对应页面或404页面
      // next(`/login?redirect=${_to.path}`)
      next({ path: '/login',query:{redirect:`${_to.path}`}})
    }
  }
})