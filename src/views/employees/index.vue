<template>
	<div class="employees">
		<Top class="top" :total="total"></Top>
		<div class="butt">
			<el-table
    :data="list"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="编号"
     >
			<template slot-scope="scope">
				{{ (inof.page-1)*inof.size+scope.$index+1 }}
			</template>
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      sortable
      >
    </el-table-column>
    <el-table-column
      label="头像"  width="250">
			<template slot-scope="scope">
				<img src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" referrerpolicy="no-referrer">
			</template>
    </el-table-column>
		<el-table-column
      prop="mobile"
      label="手机号"
      sortable
      >
    </el-table-column>
		<el-table-column
      prop="workNumber"
      label="工号"
      sortable
      >
    </el-table-column>
		<el-table-column
      prop="asd"
      label="聘用形式"
      sortable
      >
			<template slot-scope="scope">
				<p>{{ scope.row.formOfEmployment==1?'正式':'盗版' }}</p>
			</template>
    </el-table-column>
		<el-table-column
      prop="departmentName"
      label="部门"
      sortable
      >
    </el-table-column>
		<el-table-column
      prop="correctionTime"
      label="入职事件"
      sortable
      >
    </el-table-column>
		<el-table-column
      label="账户状态"
      sortable
      >
			<template slot-scope="scope">
			<el-switch
			:active-value="1"
			:inactive-value="0"
			  v-model="scope.row.enableState" >
			</el-switch>
			</template>
    </el-table-column>
		<el-table-column
      label="操作"
			width="250"
      >
			<template slot-scope="scope">
				<span @click="cha(scope.row.id)">查看</span>
				<span >转正</span>
				<span >调岗</span>
				<span >离职</span>
				<span >角色</span>
				<span style="color: #ccc;">删除</span>
			</template>
    </el-table-column>
  </el-table>
		</div>

			<div class="fen">
				<el-pagination
				@size-change="handleSizeChange"
      	@current-change="handleCurrentChange"
				:current-page.sync="inof.page"
				:page-size.sync="inof.size"
				  background
				  layout="prev, pager, next"
				  :total="total">
				</el-pagination>
			</div>


	</div>
</template>

<script>
import {userAPI} from '../../http/api'
import Top from '@/components/employeescomp/Top.vue';
import { mapActions , mapState , mapMutations} from 'vuex';
export default {
 data() {
	 return {
		tableData:[],
		// inof:{
		// 	page:1,
		// 	size:10,
		// },
		// total:0
	 };
 },
 methods: {
	// gituserAPI(){
	// 	userAPI(this.inof).then(res=>{
	// 	console.log(res);
	// 	this.tableData=res.data.data.rows
	// 	this.total=res.data.data.total
	// })
	// },	
	handleSizeChange(value){
		this.handleSizeChange1(value)
		this.getuserAPI()
	},
	handleCurrentChange(value){
		this.handleCurrentChange1(value)
		this.getuserAPI()
		// this.getuserAPI()
	},
	cha(id){
		console.log(id);
		this.$router.push({
			path:'./employxiang',
			query:{
				id:id
			}

		})
	},
	...mapActions('staff',['getuserAPI']),
	...mapMutations('staff',['handleSizeChange1','handleCurrentChange1'])
 },
 computed: {
	...mapState('staff',['list','total','inof'])
 },
 filters: {},
 watch: {},
 components:{
	Top
 },
 created(){
	// this.gituserAPI(),
	this.getuserAPI()
 }
};
</script>

<style lang="scss" scoped>
.employees{
	padding: 20px;
}
.top{
	box-shadow: 0 0 3px #ccc;
	height: 76px;
	margin-bottom: 15px;
}
span{
	margin-left: 5px;
	color: #409eff;
	cursor: pointer;
}
.fen{
	display: flex;
	justify-content: center;
	margin-top: 10px;
}

img{
	width: 70px;

}

</style>
