import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import {getToken} from '../http/cookies'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
		redirect: "/HomePage",
		children:[
			{
    path: "/HomePage",
    name: "HomePage",
    component: () => import("../views/HomePage.vue")
  	},
		{
			path: "/framework",
			name: "framework",
			component: () => import("../views/organization/framework.vue")
		}
		]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
	let token=getToken()
	if(to.path=='/login' && token){
		next('/')
	}else if(to.path!='/login' && !token){
		next('/login')
	}else{
		next()
	}

})

export default router
