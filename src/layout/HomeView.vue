<template>
	<div class="home">
    <el-container>
			<Left :flag="flag" :isCollapse="isCollapse"></Left>
      <el-main>
        <div class="top">
          <div class="left">

            <i class="el-icon-s-fold" :label="false" @click="arr" v-show="flag==false"></i>
            <i class="el-icon-s-unfold" :label="true" @click="add" v-show="flag==true"></i>

            <span class="s1">江苏传智播客教育科技股份有限公司</span>
            <span class="s2">体验版</span>
            <el-button type="primary" icon="el-icon-full-screen" @click="goFullScreen"></el-button>
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
import screenfull from "screenfull"
import {roleAPI} from '../http/api'
import Left from '../layout/Left.vue'
export default {
 data() {
	 return {
		list:{},
		flag:false,
		isCollapse: true,
		isfull: false
	 };
 },
 methods: {
	arr(){
		this.flag=true
		this.isCollapse=false
	},
	add(){
		this.flag=false
		this.isCollapse=true
	},
  goFullScreen(){
		screenfull.toggle()
      if (screenfull.isEnabled) {
        screenfull.on("change", () => {
          this.isfull = screenfull.isFullscreen
        })
      }
  },
	change() {
      console.log("chang")
      this.isfull = screenfull.isFullscreen
      console.log(this.isfull)
    },
		destroyed() {
    screenfull.off("change", () => {
      console.log("销毁")
    })
  }
 },

 computed: {},
 filters: {},
 watch: {},
 components:{
	Left
 },
 created(){
	roleAPI().then(res=>{
		console.log(res);
		this.list=res.data.data
	})
 }
};
</script>

<style lang="scss" scoped>


.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-main {
  margin: 0;
  padding: 0;
  background-color: #fcfcfc;
  height: 100vh;
  overflow-y: scroll;
  .top {
    width: 100%;
    background-color: #4b7cfc;
    height: 50px;
    line-height: 50px;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
    .left {

      .s1 {
        margin-left: 16px;
				font-size: 19px;
      }
      .s2 {
				margin-top: 5px;
        margin-left: 15px;
        background-color: #84a9fe;
        padding: 3px 5px;
        box-sizing: border-box;
        border-radius: 10px;
        font-size: 19px;
      }
			i{
				font-size: 20px;
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



</style>
