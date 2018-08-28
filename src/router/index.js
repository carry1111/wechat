import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/wechat/home'
import wechat from '@/components/wechat/wechat'
import mailList from '@/components/wechat/mailList'
import find from '@/components/wechat/find'
import me from '@/components/wechat/me'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/wechat',
      component: home,
    },
    {
      path:'/wechat',
      name:'wechat',
      component:wechat
    },
    {
      path:'/mailList',
      name:'mailList',
      component:mailList
    },
    {
      path:'/find',
      name:'find',
      component:find
    },
    {
      path:'/me',
      name:'me',
      component:me
    },
  ]
})
// router.beforeEach((to, from, next) => {
//   if(to.name=='me'){
//     this.store.dispatch('changfoot',false);
//   }
// })
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       redirect:'/wechat',
//       component: home,
//     },
//     {
//       path:'/wechat',
//       name:'wechat',
//       component:wechat
//     },
//     {
//       path:'/mailList',
//       name:'mailList',
//       component:mailList
//     },
//     {
//       path:'/find',
//       name:'find',
//       component:find
//     },
//     {
//       path:'/me',
//       name:'me',
//       component:me
//     },
//   ]
// })
