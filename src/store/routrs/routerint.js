import {roleAPI,permissionAPI} from '../../http/api'
const state={
	 list:[],
	 shops:[],
	 newList:[]
}

const mutations={
		getadd(state,value){
			state.list=value.data.data.roles.menus
			console.log(state.list,'state.liststate.liststate.list');
		},
		getarr(state,value){
			state.shops=value.data.data
			console.log(state.shops,'state.shopsstate.shopsstate.shops');
		},
		guo(state,value){
			const {
			res,
			req:{data}
			}=value
			const { menus } = res.data.data.roles
			console.log(data,'datadata');
			state.newList = data.data.filter((element) =>{
			return menus.filter((value) => value=== element.code).length > 0
			})

		}
}

const actions={
	async getroleAPI({commit,state}){
			let res=await roleAPI()
			let req=await permissionAPI()
			console.log(res);
			commit('getadd',res)
			commit('guo',{res,req})
	},
	// async getpermissionAPI({commit,state}){

	// }
}

export default{
	namespaced: true,
	state,
	mutations,
	actions,
}
