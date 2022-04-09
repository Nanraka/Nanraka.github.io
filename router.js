import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/WebHome.vue'
import About from './components/pages/WebAbout.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})