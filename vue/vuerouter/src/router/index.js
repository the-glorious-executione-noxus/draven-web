import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LearnRouter from '@/components/LearnRouter'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/hello',
      name: 'helloWorld',
      component: HelloWorld
    },{
      path: '/learn/:id',
      name: 'LearnRouter',
      component: LearnRouter
    }
  ]
})
