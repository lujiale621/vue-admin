import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home.vue'
import initpage from '../components/initpage.vue'
import userspage from '../components/userspage.vue'
import resourcepage from '../components/resourcepage.vue'
import productpage from '../components/productpage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'Home', path: '/home', component: home,
        children: [
          {
            path: '/home/initpage',
            component: initpage
          },
          {
            path: '/home/userspage',
            component: userspage
          },
          {
            path: '/home/resourcepage',
            component: resourcepage
          },
          {
            path: '/home/productpage',
            component: productpage
          },
        ]
    },
  ]
})
