<template>
	<div>
		<el-table
    :data="list"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
		class="center-table"
		>
    <el-table-column
      prop="name"
      label="名称"
      width="420">
    </el-table-column>
    <el-table-column
      prop="code"
      label="标识"
      width="430">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
			width="430">
    </el-table-column>
		<el-table-column
      label="操作"
			>
			<template slot-scope="scope">
				<span v-if="scope.row.pid==0" @click="add(scope.row.id)">添加</span>
				<span @click="bian(scope.row.id)" class="sp1">编辑</span>
				<span @click="del(scope.row.id)">删除</span>
			</template>
    </el-table-column>
  </el-table>
	</div>
</template>

<script>
import {permissionAPI,permidelAPI} from '../../http/api'
import {changeData} from '@/http/index'
export default {
	props:['dialogVisible','list'],
 data() {
	 return {
		tableData:[]
	 };
 },
 methods: {
	add(id){
		console.log(id,'ididididdidididid');
		this.$emit('add',id)
	},
	del(id){

		permidelAPI({id:id}).then(res=>{
			console.log(res);
			this.perm()
		})
	},
	bian(id){
		this.$emit('bian',id)
	},
	// perm(){
	// 	permissionAPI().then(res=>{
	// 	console.log(res,'1111111');
	// 	this.tableData=changeData(res.data.data,"0")
	// 	console.log(this.tableData,'6666666');
	// })
	// }
	
 },
 computed: {},
 filters: {},
 watch: {},
 created(){


 }
};
</script>

<style lang="scss" scoped>
:deep(.center-table td),:deep(.center-table th) {
	text-align: center !important;
}
.el-button{
	border: none;
	background-color: #fff;
	color: #66b1ff;
}
.sp1{
	padding: 0px 10px;
}
span{
	cursor: pointer;
	color: #409eff;
}
</style>
