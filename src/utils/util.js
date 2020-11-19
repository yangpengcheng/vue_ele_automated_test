/**
 * 过滤掉hide=true的路由或子路由
 */
export function filterRouter(routes){
  var _routes = []
  for(let index in routes){
    if(routes[index].meta && !routes[index].meta.hide){
      if(routes[index].children){
        routes[index].children = filterRouter(routes[index].children)
      }
      _routes.push(routes[index])
    }
  }
  return _routes
}