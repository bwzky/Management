<template>
	<div class="setting">
		<el-tabs v-model="activeName" >
    <el-tab-pane label="用户管理" name="first">
			<Lefts :tableData="tableData" :inof="inof" @arr="arr" @bian="bian" @del="del" @fen="fen"></Lefts>
			<tian :flag="flag" v-if="dialogVisible" @cloes="cloes" @add="add" :id="id"></tian>
					<el-dialog
					  title="提示"
					  :visible.sync="xian"
					  width="40%"
					  :before-close="handleClose">
						<el-tree
						ref="mytree"
						  :data="data"
						  show-checkbox
						  node-key="id"
						  :default-expand-all="true"
						  :default-checked-keys="jiao.permIds"
						  :props="defaultProps"
							@check="onNodeCheck">
						</el-tree>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="xian=false">取 消</el-button>
					    <el-button type="primary" @click="hande">确 定</el-button>
					  </span>
					</el-dialog>

			<div class="bon">
				<el-pagination
			@size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="inof.page"
      :page-size.sync="inof.pagesize"
    layout="prev, pager, next"
    :total="total">
  </el-pagination>
			</div>
		</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
			<Rights></Rights>
		</el-tab-pane>
  </el-tabs>
	</div>
</template>

<script>
import {rolejiaoAPI,roledelAPI,assignPremtianAPI,rolexuanAPI,assignPremxuanAPI} from '../../http/api'
import Lefts from '@/components/settingcom/Lefts.vue';
import Rights from '@/components/settingcom/Rights.vue';
import tian from '@/components/settingcom/tian.vue';
// import changeData from '@/http/index.js'

export default {
 data() {
	 return {
		activeName: 'first',
		inof:{
			page:1,
			pagesize:10
		},
		tableData:[],
		total:0,
		flag:false,
		dialogVisible: false,
		id:'',
		xian:false,
		data:[],
		defaultProps:{
			label:'name'
		},
		aaa:[],
		fenid:'',
		jiao:[]
	 };
 },
 methods: {
	getrolejiaoAPI(){
		rolejiaoAPI(this.inof).then(res=>{
		console.log(res);
		this.tableData=res.data.data.rows
		this.total=res.data.data.total
	})
	},
	handleSizeChange(){
		this.getrolejiaoAPI()
	},
	handleCurrentChange(){
		this.getrolejiaoAPI()
	},
	arr(){
		this.dialogVisible=true,
		this.flag=true
	},
	cloes(){
		this.dialogVisible=false
	},
	add(){
		this.getrolejiaoAPI()
		this.dialogVisible=false
	},
	//编辑
	bian(id){
		this.id=id,
		this.flag=false,
		this.dialogVisible=true,
		this.getrolejiaoAPI()
	},
	//删除
	del(id){
		roledelAPI({id:id}).then(res=>{
			this.getrolejiaoAPI()
			console.log(res,'删除');
		})
	},
	//数据配置
	changeData(arr, pid) {
	 const newArr = []
	 arr.forEach((item) => {
	  if (item.pid == pid) {
	   const children =this.changeData(arr, item.id)
	   if (children.length) {
	    item.children = children
	   }
	   newArr.push(item)
	  }
	 })
	 return newArr
	},
	//分配渲染
	fen(id){
		this.xian=true,
		this.fenid=id
		assignPremtianAPI().then(res=>{
			console.log(res,'分配设置');
			this.data=this.changeData(res.data.data,"0")
			// console.log(this.data,'datadatadata');
		})
		rolexuanAPI({id:id}).then(res=>{
			// console.log(res,'idididididdidi');
			// this.aaa=res.data.data.permIds,
			this.jiao=res.data.data
			// console.log(this.jiao);
		})
	},

	handleClose(){
		this.xian=false

	},
	onNodeCheck(checkedNodes){	

	},
	hande(){
		this.xian=false
		console.log(this.jiao,'jsoajsoajoas');
		assignPremxuanAPI({id:this.jiao.id,permIds:this.$refs.mytree.getCheckedKeys()}).then(res=>{
			console.log(res,'xxxxxxxxx');
		})
	},


 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	this.getrolejiaoAPI()
 },
 components:{
	Lefts,Rights,tian
 }
};
</script>

<style lang="scss" scoped>
.setting{
	padding: 20px;
	.el-tabs{
		box-shadow: 0 0 3px #ccc;
		padding: 30px;
	}
}
.bon{
	display: flex;
	justify-content: center;
}
</style>
