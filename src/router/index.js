import Vue from 'vue'
import Router from 'vue-router'
import MainApp from '@/components/MainApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainApp',
      component: MainApp
    }
    // ,
    // {
    //   path: '/highlight',
    //   name: 'Highlight',
    //   component: Highlight
    // }
  ]
})
