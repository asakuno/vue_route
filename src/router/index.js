import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ArticleView from '../views/ArticleView.vue'
import PageView from '../views/PageView.vue'
import CountView from '../views/CountView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    components: {
      default: MainView,
      sub: ArticleView
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/article/:aid',
    name: 'Article',
    component: ArticleView,
    props: true,
    children: [
      {
        path: 'pages/:page_num',
        name: 'Page',
        component: PageView,
        props: true
      },
      {
        path: '',
        name: 'PageOne',
        component: PageView,
        props: { page_num: 1 }
      }
    ]
  },
  {
    path: '/count',
    name: 'CountView',
    component: CountView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
