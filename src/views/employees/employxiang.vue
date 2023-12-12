<template>
	<div class="xiang">
		<div class="box">
			<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录账户设置" name="first">
			<emplogin :id="id"></emplogin>
		</el-tab-pane>
    <el-tab-pane label="个人信息" name="second">
			<empge :id="id"></empge>
		</el-tab-pane>
    <el-tab-pane label="岗位信息" name="third">
			<empgang :id="id"></empgang>
		</el-tab-pane>
  </el-tabs>
		</div>

	</div>
</template>

<script>
import emplogin from '../../components/employeescomp/emplogin.vue'
import empge from '../../components/employeescomp/empge.vue'
import empgang from '../../components/employeescomp/empgang.vue'
export default {
 data() {
	 return {
		id:'',
		activeName: 'first'
	 };
 },
 methods: {
	handleClick(){

	}
 },
 computed: {},
 filters: {},
 watch: {},
 components:{
	emplogin,empge,empgang
 },
 created(){
	this.id=this.$route.query.id
 }
};
</script>

<style lang="scss" scoped>
.xiang{
	padding: 20px;
}
.box{
	padding: 10px;
	box-shadow: 0 0 3px #ccc;
}
</style>
