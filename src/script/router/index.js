import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/list/Index.vue'
import Home from '../components/list/Home.vue'
import Search from '../components/list/Search.vue'
import Furniture from '../components/list/Furniture.vue'
import Mine from '../components/mine/mine.vue'
import Detail from '../components/detail/Detail.vue'
import Scene from '../components/list/Scene.vue'
import We from '../components/list/We.vue'

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
          path: 'furniture/:type',
          component: Home
        },
        {
          path: 'house/:type',
          component: Home
        },
        {
          path: 'scene',
          component: Scene
        },
        {
          path: 'we',
          component: We
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
