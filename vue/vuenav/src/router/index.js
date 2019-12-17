import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/container/Home'
import Car from '@/container/Car'
import Order from '@/container/Order'
import NotFound from '@/container/NotFound'
import Hot from '@/container/Home/Subpage/Hot'
import Re from '@/container/Home/Subpage/Re'


Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "*",
      redirect: "/NotFound"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'home/hot',
      children: [

        {
          path: "hot",
          component: Hot
        },
        {
          path: "re",
          component: Re
        }
      ]
    }
    ,
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
    ,
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
    ,
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
