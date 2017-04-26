/**
 *
 *  配置文件，开发环境和生产环境之间的切换
 *
 */

let baseUrl;
let routerMode = 'history' ;
let imgBaseUrl = 'http://eg.com' ;

if(process.env.NODE_ENV == 'development'){
  baseUrl = ''
}else {
  baseUrl = 'http://eg.com'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
