import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/list/Index.vue'
import Home from '../components/list/Home.vue'
import Search from '../components/list/Search.vue'
import Furniture from '../components/list/Furniture.vue'
import Mine from '../components/mine/mine.vue'
import Detail from '../components/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'furniture',
          component: Home
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'/mine',
      component: Mine
    },
    {
        path: '/detail',
        component: Detail
    }
  ]
})
