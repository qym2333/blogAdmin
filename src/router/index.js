import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Welcome from '../views/Welcome.vue'
import Article from '../views/article/Article.vue'
import ArticleInfo from '../views/article/Info.vue'
import ArticleDetail from '../views/article/Detail.vue'
import Envelope from '../views/envelope/Envelope.vue'
import Myself from '../views/myself/Myself.vue'
import MyselfInfo from '../views/myself/Info.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/login',
  component: Login
}, {
  name: ArticleDetail,
  path: '/article/detail/:id?',
  component: ArticleDetail
}, {
  path: '/index',
  component: Index,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/article',
    component: Article
  }, {
    name: 'articleInfo',
    path: '/article/info',
    component: ArticleInfo
  }, {
    path: '/envelope',
    component: Envelope
  }, {
    path: '/myself',
    component: Myself
  }, {
    path: '/myself/info',
    component: MyselfInfo
  }]
}]

const router = new VueRouter({
  routes
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('token')) {
    next()
  } else {
    to.path === '/login' ? next() : next('/login')
  }
})

export default router
