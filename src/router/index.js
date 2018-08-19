import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/components/wechat/home'
import wechat from '@/components/wechat/wechat'
import mailList from '@/components/wechat/mailList'
import find from '@/components/wechat/find'
import me from '@/components/wechat/me'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'home',
      redirect:'/wechat',
      component: home,
      children:[
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
    }
  ]
})
