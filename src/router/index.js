import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../layout/HomeView.vue"
import store from "@/store"
import {getToken} from '../http/cookies'
Vue.use(VueRouter)
store.dispatch("routerint/getroleAPI")
// export const qwe=
// 	[
// 		{
// 	path: "/HomePage",
// 	name: "HomePage",
// 	component: () => import("../views/HomePage.vue"),
// 	meta:{name:'首页'}
// 	}
// 	,{
// 		path: "/employees",
// 		name: "employees",
// 		component: () => import("../views/employees/employees.vue"),
// 		meta:{name:'员工'}
// 	},{
// 		path: "/setting",
// 		name: "setting",
// 		component: () => import("../views/settings/setting.vue"),
// 		meta:{name:'公司设置'}
// 	},{
// 		path: "/limits",
// 		name: "limits",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'权限设置'}
// 	},{
// 		path: "/she",
// 		name: "she",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'社保'}
// 	},{
// 		path: "/she",
// 		name: "she",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'审批'}
// 	},{
// 		path: "/she",
// 		name: "she",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'考勤'}
// 	},{
// 		path: "/she",
// 		name: "she",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'工资'}
// 	},{
// 		path: "/she",
// 		name: "she",
// 		component: () => import("../views/permission/limits.vue"),
// 		meta:{name:'权限设置'}
// 	},
// 	{
// 		path: "/framework",
// 		name: "framework",
// 		component: () => import("../views/organization/framework.vue"),
// 		children:[
// 	{
// 		path: "/employxiang",
// 		name: "employxiang",
// 		component: () => import("../views/employees/employxiang.vue")
// 	}
// 		],
// 		meta:{name:'组织架构'}
// 	}
// 	]

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
		redirect: "/HomePage",
		children:[
			{
				path: "/HomePage",
				name: "HomePage",
				component: () => import("@/views/dashboard/index.vue"),
				meta:{text1:'首页',icon:"setting"}
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
  },
  {
    path: "/htttttp",
    name: "htttttp",
    component: () => import("../views/htttttp.vue")
  }
]

const Dashboard = {
	path: "/HomePage",
	name: "HomePage",
	component: () => import("@/views/dashboard/index.vue"),
	meta:{text1:'首页',icon:"setting"}
	}

const router = new VueRouter({
  routes
})
// let Dynamic=[]
router.beforeEach((to, from, next) => {
	let token=getToken()
	if(to.path=='/login' && token){
		next('/')
	}else if(to.path!='/login' && !token){
		next('/login')
	}else{
		next()
	}

	setTimeout(()=>{
	let initDynamic =	store.state.routerint.newList
	let Dynamic=[]
	console.log(initDynamic,'initDynamicinitDynamicinitDynamic');
	initDynamic.forEach(item=>{
		let child={
				path:'/'+item.code,
				name: item.code,
				component: () => import(`@/views/${item.code}/index.vue`),
				meta:{
					icon:'setting',
					text1:item.name
				}
		}
		router.addRoute('home',child)
		Dynamic.push(child)
	})
	Dynamic.unshift(Dashboard)
	localStorage.setItem("Routes", JSON.stringify(Dynamic))
	},1000)



})

export default router
