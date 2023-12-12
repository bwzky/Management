import {userAPI} from '../../http/api'
const state={
	inof:{
		page:1,
		size:10,
	},

	list:[],
	total:0
}

const mutations={
	getuser(state,value){
		console.log(value,'丁真呢');
		state.list=value.data.data.rows,
		state.total=value.data.data.total
	},
	handleSizeChange1(state,value){
		state.inof.size=value
	},
	handleCurrentChange1(state,value){
		state.inof.page=value
	}
}

const actions={
		async getuserAPI({commit,state}){
			let res = await userAPI(state.inof)
			commit('getuser',res)
		}
}

export default{
	namespaced:true,
	state,
	mutations,
	actions
}
