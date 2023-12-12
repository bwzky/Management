<template>
	<div>
		<div class="box">
			<div class="zuo">
				<el-button type="primary" plain>共<span>{{ total }}</span>条数据</el-button>
			</div>
			<div class="you">
				<el-button type="danger">简单表头导出</el-button>
				<el-button type="info">复杂表头导出</el-button>
				<el-button type="success">excel导入</el-button>
				<el-button type="primary" disabled>新增员工</el-button>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props:['total'],
 data() {
	 return {};
 },
 methods: {},
 computed: {},
 filters: {},
 watch: {}
};
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	padding: 20px 10px;
	justify-content: space-between;
}
</style>
