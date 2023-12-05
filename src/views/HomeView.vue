<template>
	<div class="home">
    <el-container>
      <el-aside width="160px">
        <img src="../assets/logo.png" alt="">
				<el-menu
      default-active="2"
      class="#cccccc"
      background-color="#5182fc"
      text-color="#fff"
      active-text-color="#fff"
			router>
          <el-menu-item index="./HomePage">首页</el-menu-item>
          <el-menu-item index="1-2">员工</el-menu-item>
          <el-menu-item index="1-3">公司设置</el-menu-item>
          <el-menu-item index="1-4">权限设置</el-menu-item>
          <el-menu-item index="1-5">社保</el-menu-item>
          <el-menu-item index="1-6">审批</el-menu-item>
          <el-menu-item index="1-7">考勤</el-menu-item>
          <el-menu-item index="1-8">工资</el-menu-item>
          <el-menu-item index="./framework">组织框架</el-menu-item>
    </el-menu>
      </el-aside>
      <el-main>
        <div class="top">
          <div class="left">
            <i class="el-icon-s-fold" ></i>
            <!-- <i class="el-icon-s-unfold"></i> -->
            <span class="s1">江苏传智播客教育科技股份有限公司</span>
            <span class="s2">体验版</span>
          </div>
          <div class="right">
						<img class="head" src="../assets/head.jpg" alt="">
						<span style="font-size: 15px">{{ list.username }}</span>
            <el-dropdown trigger="click">
    			  <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right" style="color: #fff;"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
    		<el-dropdown-item>项目地址</el-dropdown-item>
    		<el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
          </div>
        </div>
        <div class="mid">
				</div>
					<router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {roleAPI} from '../http/api'

export default {
 data() {
	 return {
		list:{}
	 };
 },
 methods: {

 },

 computed: {},
 filters: {},
 watch: {},
 created(){
	roleAPI().then(res=>{
		console.log(res);
		this.list=res.data.data
	})
 }
};
</script>

<style lang="scss" scoped>

.el-aside {
  background-color: #4979fc;
  height: 100vh;

  img {
    margin: 0 auto;
  }
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #fcfcfc;
  height: 100vh;
  overflow-y: scroll;
  .top {
    width: 100%;
    background-color: #5788fd;
    height: 40px;
    line-height: 40px;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
    .left {

      .s1 {
        margin-left: 16px;
      }
      .s2 {
        margin-left: 15px;
        background-color: #84a9fe;
        padding: 3px 5px;
        box-sizing: border-box;
        border-radius: 10px;
        font-size: 14px;
      }
    }
		.right{
			width: 70px;
			position: relative;
			.head{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				position: absolute;
				top: 10px;
				right: 70px;
			}
		}
  }
  .mid {
    width: 100%;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
  }

}
.el-dropdown-link {
    cursor: pointer;
  }
	.el-menu-item:hover{
	  background: #cccccc!important;
	  color: #1c88cf!important;
	}
	// .el-submenu__title:hover {
	//   background: #1c88cf!important;
	//   color: #fff!important;
	// }
	// .el-menu-item.is-active {
	//   background: #1c88cf!important;
	//   color: #fff!important;
	// }
	// .el-submenu__title.is-active {
	//   background: #1c88cf!important;
	//   color: #fff!important;
	// }
</style>
