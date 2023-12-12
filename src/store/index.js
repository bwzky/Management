import Vue from "vue"
import Vuex from "vuex"
import permiss from './settingvuex/tian'
import staff from './employ/staff.js'
import routerint from "./routrs/routerint"
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
	getters,
  modules: {
		permiss,
		staff,
		routerint
	}
})
