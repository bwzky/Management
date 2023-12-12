<template>
	<div>
		<el-dialog
  :title="flag==true?'添加':'编辑'"
  :visible.sync="dialogVisible"
  width="45%"
  :before-close="handleClose">
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
	<el-form-item label="权限描述" prop="description">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>

	<el-form-item label="开启">
		<template slot-scope=scope>
			<el-switch v-model="ruleForm.value1" />
		</template>
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
import {permiAPI,xiangpermiAPI,permibian} from '../../http/api'
export default {
	props: ['flag','idd','list'],
 data() {
	 return {
		ruleForm:{
			name:'',
			code:'',
			description:'',
			type:1,
			pid:''
		},
		dialogVisible:true,

		rules:{
			name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
					code: [
            { required: true, message: '请输入标识', trigger: 'blur' },
          ],
		}
	 };
 },
 methods: {
	cloes(){
		this.$emit('cloes')
	},
	add(){
		if(this.flag==true){
			permiAPI(this.ruleForm).then(res=>{
				console.log(res);
			})
		}else{
			permibian(this.ruleForm).then(res=>{
				console.log(res);
			})
		}

		this.$emit('tian')

	},
	handleClose(){

	}
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	console.log(this.idd,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
	this.ruleForm.pid=this.idd
	if(this.flag==false){
		xiangpermiAPI({id:this.idd}).then(res=>{
			console.log(res,'resresresresres');
			this.ruleForm=JSON.parse(JSON.stringify(res.data.data))
		})
	}
 }
};
</script>

<style lang="scss" scoped>

</style>
