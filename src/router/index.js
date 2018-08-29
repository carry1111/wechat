import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'

import wechat from '@/components/wechat/wechat'
import mailList from '@/components/wechat/mailList'
import find from '@/components/wechat/find'
import me from '@/components/wechat/me'

import chat from '@/components/wechat/chat'

Vue.use(Router, store)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/wechat',
    },
    {
      path: '/wechat',
      name: 'wechat',
      component:wechat
    },
    {
      path: '/mailList',
      name: 'mailList',
      component:mailList
    },
    {
      path: '/find',
      name: 'find',
      component:find
    },
    {
      path: '/me',
      name: 'me',
      component:me
    },
    {
      path: '/chat',
      name: 'chat',
      component:chat
    },
  ]
})
router.beforeEach((to, from, next) => {
  if(to.name=='wechat'||to.name=='mailList'||to.name=='find'||to.name=='me'){
    store.dispatch('changfoot',true);
  }else{
    store.dispatch('changfoot',false);
  }
  next()
})
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
