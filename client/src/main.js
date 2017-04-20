import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import PostBlog from './components/PostBlog.vue'
import ListBlog from './components/ListBlog.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

const routes = [
  {
    path: '/'
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/signin',
    component : SignIn
  },
  {
    path: '/post',
    component : PostBlog
  },
  {
    path: '/list',
    component : ListBlog
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
