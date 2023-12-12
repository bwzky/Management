<template>
	<div class="top">
		<el-button type="primary">添加权限</el-button>
	</div>
</template>

<script>
export default {
	props:['list'],
 data() {
	 return {};
 },
 methods: {},
 computed: {},
 filters: {},
 watch: {},
 created(){
	console.log(34534534534);
 }
};
</script>

<style lang="scss" scoped>
.top{
	display:flex;
	justify-content: right;
	padding: 18px 20px;
	margin-bottom: 10px;
	.el-button{

	}
}

</style>
