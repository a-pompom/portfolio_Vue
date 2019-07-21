import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      
      component() { 
        return import(/* webpackChunkName: "profile" */ './views/Profile.vue')
      }
    },
	{
      path: '/works',
      name: 'works',
      
      component() { 
        return import(/* webpackChunkName: "works" */ './views/Works.vue')
      }
    },
	{
      path: '/social',
      name: 'social',
      
      component() { 
        return import(/* webpackChunkName: "social" */ './views/Social.vue')
      }
    }
  ]
})
