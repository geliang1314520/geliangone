import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueResource from 'vue-resource'
import login from '@/pages/login'
import register from '@/pages/register'
import nav3 from '@/pages/nav3'
import nav1 from '@/pages/nav1'
import nav2 from '@/pages/nav2'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/register',
    	component:register
    },
    {
    	path:'/nav3',
    	component:nav3
    },
    {
    	path:'/nav1',
    	component:nav1
    },
    {
    	path:'/nav2',
    	component:nav2
    }
  ]
})
