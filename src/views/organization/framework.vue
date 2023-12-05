<template>
	<div>
  <div class="block">
    <el-tree
      :data="data"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <button>
						{{ data.manager }}
          </button>
          <el-dropdown	 @command="addAndEdit($event,data.id,data.pid)">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item command="tian">添加子部门</el-dropdown-item>
    <el-dropdown-item command="compile" v-show="data.pid!=-1">编辑部门</el-dropdown-item>
    <el-dropdown-item command="del" v-show="data.pid!=-1">删除部门</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </span>
      </span>
    </el-tree>
  </div>
	<tanchu v-if="dialogVisible" @cloes="cloes" :flag="flag" @add="add" :pid="pid"></tanchu>
</div>

</template>

<script>
import {departmentAPI,deldepartmentAPI} from '@/http/api'
import tanchu from '../../components/organiz/tanchu.vue'
export default {
 data() {
	 return {
		data:[],
		renderContent:'',
		dialogVisible:false,
		flag:true,
		pid:'',
	 };
 },
 methods: {
	gitdepartmentAPI(){
		departmentAPI().then(res=>{
			console.log(res);
			const resdata=res.data.data.depts
			const array=[]
			const list=[]
			resdata.forEach(item => {
				if(item.pid==-1){
					array.push({...item,manager:"负责人"})
				}
			});

			// resdata.forEach(item=>{
			// 	if(item.pid==""){
			// 		list.push(item)
			// 	}
			// })
			// array[0].children=list

			// array[0].children.forEach((item)=>{
			// 	if(!item.children){
			// 		item.children=[]
			// 	}
			// })

			// array[0].children.forEach((item1)=>{
			// 	resdata.forEach(child=>{
			// 		if(item1.id==child.pid){
			// 			item1.children.push(child)
			// 		}
			// 	})
			// })

			array[0].children=this.changeData(res.data.data.depts,0)
			console.log(this.changeData(res.data.data.depts,""),'数据111111');
			console.log(array,'数据');
			this.data=array
			// this.data=changeData(res.data.data.depts,-1)
			console.log(this.data);
		})
	},

  changeData(arr, pid) {
	//拿到总数居，和传递过来的pid
	 const newArr = []
	//如果item.pid==传递过来的数据
	 arr.forEach((item) => {
		//如果item.pid==传递过来的数据
	  if (item.pid == pid) {
		//就将数据赋值给children
	   const children = this.changeData(arr, item.id)
		//if判断children的长度不等于0就赋值
	   if (children.length) {
	    item.children = children
	   }
	//用新的数组接受item
	   newArr.push(item)
	  }
	 })
	 //导出
	 return newArr
	},
	add(){
		this.dialogVisible=false
		this.data=[]
		this.gitdepartmentAPI()
	},
	addAndEdit(event,id,pid){
		if(event==="tian"){
			this.dialogVisible=true
			this.flag=true
			this.pid=id
			console.log(event,'$event');
		}else if(event=="compile"){
			this.flag=false
			this.dialogVisible=true
			this.pid=id
			console.log(event,'$event');
		}else{
			deldepartmentAPI({id:id}).then(res=>{
				console.log(res);
				this.gitdepartmentAPI()
			})
		}
	},



	cloes(){
		this.dialogVisible=false
	}

 },

 components:{
	tanchu
 },

 computed: {},
 filters: {},
 watch: {},
 created(){
	this.gitdepartmentAPI()
 }
};
</script>

<style lang="scss" scoped>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
	button{
		border:none;
		background-color: #fff;
		margin-right:20px
	}
</style>
