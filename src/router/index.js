import Vue from 'vue'
import Router from 'vue-router'
import MyCustomForm from '@/components/MyCustomForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyCustomForm',
      component: MyCustomForm
    }
  ]
})
