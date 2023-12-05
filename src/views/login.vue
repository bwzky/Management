<template>
	<div class="login">

		<el-form ref="form" :model="form" >
			<p class="p1">iHRM后台登录系统</p>
  <el-form-item>
    <el-input v-model="form.mobile"><i slot="prefix" class="el-icon-user-solid"></i></el-input>
  </el-form-item>
	<el-form-item>
    <el-input v-model="form.password" show-password><i slot="prefix" class="el-icon-s-goods"></i></el-input>
  </el-form-item>
	<div class="box">
		<el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
	</div>
	<p class="p2">仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息 (如手机号、身份证号等)!</p>
		</el-form>
	</div>
</template>

<script>
import {loginAPI} from '../http/api'
import {setToken} from '../http/cookies'
export default {
 data() {
	 return {
		form:{
			mobile:'13800000002',
			password:'hm#qd@23!'
		}
	 };
 },
 methods: {
	onSubmit(){
		loginAPI(this.form).then(res=>{
		console.log(res);
		if(res.data.success==true){
			setToken(res.data.data)
			this.$message({
          message:res.data.message,
          type: 'success'
        });
				this.$router.push('/')
		}else{
			this.$message({
				message:res.data.message,
        type: 'error'
			})
		}
	})
	},
 },
 computed: {},
 filters: {},
 watch: {}
};
</script>

<style lang="scss" scoped>
.login{
	display: flex;
	justify-content: center;
	background-image: url(../assets/logBg.png);
	align-content: center;
	background-color:#2068fb;
	.el-form{
		.p1{
			text-align: center;
			color: #fff;
			font-size: 45px;
		}
		width: 450px;
		margin-top: 10%;
		.el-button{
			width: 100%;
			background-color: #407ffe;
			border: none;
		}
		.p2{
			color: #fff;
			font-size: 12px;
		}
	}
}
</style>
