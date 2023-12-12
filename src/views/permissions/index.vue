<template>
	<div>
		<div class="box">
		<top class="top"></top>
		<Butt class="Butt" :dialogVisible="dialogVisible" @add="add" @bian="bian" :list="list"></Butt>
		<eject v-if="dialogVisible" :flag="flag" @cloes="cloes" :idd="idd" @tian="tian"></eject>

		</div>

	</div>
</template>

<script>
import {changeData} from '@/http/index'
import {permissionAPI} from '../../http/api'
import top from '@/components/permissio/top.vue'
import Butt from '@/components/permissio/Butt.vue'
import eject from '@/components/permissio/eject.vue'
export default {
 data() {
	 return {
		dialogVisible:false,
		flag:true,
		idd:'',
		list:[]
	 };
 },
 methods: {
	add(pid){
		this.dialogVisible=true
		this.flag=true
		this.idd=pid
	},
	cloes(){
		this.dialogVisible=false
	},
	tian(){
		this.perm(),
		this.dialogVisible=false

	},
	perm(){
		permissionAPI().then(res=>{
			console.log(res,'zong');
			console.log(res,'1111111');
			this.list=changeData(res.data.data,"0")
			console.log(this.list,'this.listthis.listthis.listthis.list');
	})
	},
	bian(id){
		this.flag=false,
		this.idd=id,
		this.dialogVisible=true,
		console.log(id,'ididiidididiiddidididid');
	}
 },
 computed: {},
 filters: {},
 watch: {},
 components:{
	top,Butt,eject
 },
 created(){
	this.perm()
 }
};
</script>

<style lang="scss" scoped>
.box{
	padding: 20px;
	height: 100%;
	.top{
		height: 73px;
		box-shadow: 0 0 3px #ccc;
	}
	.Butt{
		// box-shadow: 0 0 3px #ccc;
	}
}
</style>
