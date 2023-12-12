<template>
	<div>
		<el-button type="primary" style="margin-bottom: 20px;" @click="arr">添加角色</el-button>
		<el-table
		class="center-table"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="序号"
      width="150">
		<template slot-scope="scope">
			{{ (inof.page-1)*inof.pagesize+scope.$index+1 }}
		</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
			width="250"
      >
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
		<el-table-column
      label="操作">
			<template slot-scope="scope">
				<el-button type="success" @click="fen(scope.row.id)">分配设置</el-button>
				<el-button type="primary" @click="bian(scope.row.id)" >编辑</el-button>
				<el-button type="danger" @click="del(scope.row.id)">删除</el-button>
			</template>
    </el-table-column>
  </el-table>
	<div class="bin">

	</div>
	</div>
</template>

<script>
export default {
	props:['tableData','inof'],
 data() {
	 return {

	 };
 },
 methods: {
	arr(){
		this.$emit('arr' )
	},
	bian(id){
		this.$emit('bian',id)
	},
	del(id){
		this.$emit('del',id)
	},
	fen(id){
		this.$emit('fen',id)
	}
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
 }
};
</script>

<style lang="scss" scoped>
:deep(.center-table td),:deep(.center-table th) {
	text-align: center !important;
}
</style>
