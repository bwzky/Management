<template>
	<div >
		<el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" >
    <el-input v-model="ruleForm.username" prop="username"></el-input>
  </el-form-item>
	<el-form-item label="新密码">
    <el-input v-model="ruleForm.password" prop="password" type="password"></el-input>
  </el-form-item>
	<el-form-item>
    <el-button type="primary" @click="submitForm">更新</el-button>
  </el-form-item>
		</el-form>
	</div>
</template>

<script>
import {userbasicAPI,userbaoAPI} from '../../http/api'
export default {
	props:['id'],
 data() {
	 return {
		ruleForm:{

		},
		rules: {
			username: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
			password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
		}
	 };
 },
 methods: {
	submitForm(){
		userbaoAPI(this.ruleForm).then(res=>{
			console.log(res,'更改');
		})
	},
	
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	userbasicAPI({id:this.id}).then(res=>{
		console.log(res);
		this.ruleForm=JSON.parse(JSON.stringify(res.data.data))
	})
 }
};
</script>

<style lang="scss" scoped>
.el-form{
	width: 400px;
}
</style>
