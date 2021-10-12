import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/pages/PageOne/PageOne'
import PageTwo from '@/pages/PageTwo/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/app/:randomId',
      name: 'PageTwo',
      component: PageTwo
    }
  ]
})
