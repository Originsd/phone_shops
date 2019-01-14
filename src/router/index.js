import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '../views/register/register'
import Main from '../views/main/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Register,
      children:[
        
      ]
    }
  ]
})
