<template>
	<div>
		<el-dialog
  :title="flag==true?'添加':'编辑'"
  :visible.sync="dialogVisible"
  width="45%"
  :before-close="handleClose">
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="部门名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="部门编码" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
	<el-form-item label="部门负责" prop="manager">
    <el-select v-model="ruleForm.manager" placeholder="请选择活动区域">
      <el-option v-for="(item, index) in simple" :key="item.id" :label="item.username" :value="item.username"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="部门介绍" prop="introduce">
    <el-input type="textarea" v-model="ruleForm.introduce"></el-input>
  </el-form-item>
	</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="cloes">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
</el-dialog>

	</div>
</template>

<script>
import {companyAPI,simpleAPI,departbianAPI,chaxunAPI} from '@/http/api'
export default {
	props: ['flag','pid'],
 data() {
	 return {
		dialogVisible: true,
		simple:[],
		ruleForm:{
			name:'',
			manager:'',
			code:'',
			introduce:'',
			pid:''
		},
		cahid:[],
		rules: {
          name: [
            { required: true, message: '1-50个字符', trigger: 'blur' },
          ],
					manager: [
            { required: true, message: '1-50个字符', trigger: 'blur' },
          ],
					code: [
            { required: true, message: '请选择', trigger: 'blur' },
          ],
					introduce: [
            { required: true, message: '1-300个字符', trigger: 'blur' },
          ],
		}
	 };
 },
 methods: {
	handleClose(){

	},
	cloes(){
		this.$emit('cloes')
	},
	add(){
		if(this.flag==true){
			companyAPI(
				this.ruleForm
				// {name:this.ruleForm.name,manager:this.ruleForm.manager,code:this.ruleForm.code,introduce:this.ruleForm.introduce}
				).then(res=>{
				console.log(res);
			})
		}else{
			departbianAPI(this.ruleForm).then(res=>{
				console.log(res,'修改');
				console.log(this.ruleForm.pid,'11111111111111111111111111');
			})

		}
		this.$emit('add')
	},
	getsimpleAPI(){
		simpleAPI().then(res=>{
		console.log(res);
		this.simple=res.data.data
	})
	},
	chaxun(){
		if(this.flag==false){
			console.log(this.pid,'pppppp');
	chaxunAPI({id:this.pid}).then(res=>{
		this.ruleForm=JSON.parse(JSON.stringify(res.data.data))
	})
		}

	},
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	this.getsimpleAPI()
	this.ruleForm.pid=this.pid
	console.log(this.pid,'pid');
	// if(this.flag==false){
		this.chaxun()
	// }

 }
};
</script>

<style lang="scss" scoped>

</style>
