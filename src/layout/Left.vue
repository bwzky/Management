<template>
	<div>
		<el-aside :width="flag==true?'200px':'63px'">
        <!-- <img src="../assets/logo.png" alt=""> -->
				<!-- <el-image style=" height: 50px; width: 140px; margin-top: 6px; margin-left: 30px;"  										:src="require('../../assets/login.png')" fit="contain"></el-image> -->
				<el-menu
			@open="handleOpen" @close="handleClose" :collapse="isCollapse"
      default-active="2"
      class="#ffff"
      text-color="#fff"
			background-color="rgb(0,0,0,0)"
      active-text-color="#fff"
			router>
					<el-menu-item :index="item.path" v-for="item in aaa">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">{{ item.meta.text1}}</span>
  				</el-menu-item>
					<!-- <el-menu-item index="./employees">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">员工</span>
  				</el-menu-item>
					<el-menu-item index="./setting">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">公司设置</span>
  				</el-menu-item>
					<el-menu-item index="/limits">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">权限设置</span>
  				</el-menu-item>
					<el-menu-item index="5">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">社保</span>
  				</el-menu-item>
					<el-menu-item index="6">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">审批</span>
  				</el-menu-item>
					<el-menu-item index="7">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">考勤</span>
  				</el-menu-item>
					<el-menu-item index="8">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">工资</span>
  				</el-menu-item>
					<el-menu-item index="./framework">
  				  <i class="el-icon-menu"></i>
  				  <span slot="title">组织架构</span>
  				</el-menu-item> -->
    </el-menu>
      </el-aside>
	</div>
</template>

<script>
import {qwe} from '@/router/index'
export default {

	props:['flag','isCollapse'],
 data() {
	 return {
		aaa:JSON.parse(localStorage.getItem('Routes') || []),
		bbb:[]
	 };
 },
 methods: {

	handleOpen(){

	},
	handleClose(){

	}
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	console.log(qwe,'rewrwerwerwer');
	console.log(this.aaa,'aaaaaaaa');
	this.bbb=this.aaa
 }
};
</script>

<style lang="scss" scoped>
.el-aside {
  background: -webkit-linear-gradient(bottom, #3e6df8 , #5b8cff);
  height: 100vh;

  img {
    margin: 0 auto;
  }
}

.el-menu{
	border-right: 0px;
	background: -webkit-linear-gradient(bottom, #3e6df8 , #5b8cff);
	height: 90%;
	.el-menu-item{
	font-size: 16px !important;
	}
.el-dropdown-link {
    cursor: pointer;
  }
	.el-menu-item:hover{
	  background: #cccccc!important;
	  color: #1c88cf!important;
		i{
			color: #1c88cf!important;
			font-size: 20px;
		}
	}

	i{
		color: #fff;
	}
}
</style>
