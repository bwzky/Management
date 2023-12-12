<template>
	<div>
		<el-dialog
  :title="flag==true?'添加':'编辑'"
  :visible.sync="dialogVisible"
  width="45%"
  :before-close="handleClose">
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="角色描述" prop="code">
    <el-input v-model="ruleForm.description"></el-input>
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
import {roletianAPI,rolexiangAPI,rolebianAPI} from '../../http/api'
export default {
	props:['flag','id'],
 data() {
	 return {
		rules: {
          name: [
            { required: true, message: '角色名称不能为空', trigger: 'blur' },
          ],
					manager: [
            { required: true, message: '1-50个字符', trigger: 'blur' },
          ],
		},
		dialogVisible: true,
		ruleForm:{}
	 };
 },
 methods: {
	handleClose(){

	},
	cloes(){
		this.$emit('cloes')
	},
	add(){
		if(this.flag==true){
			roletianAPI(this.ruleForm).then(res=>{
				console.log(res);
			})
		}else{
			rolebianAPI(this.ruleForm).then(res=>{
				console.log(res,'编辑');
			})
		}
		this.$emit('add')
	}
 },
 computed: {},
 filters: {},
 watch: {},
 created(){
	if(this.flag==false){
		rolexiangAPI({id:this.id}).then(res=>{
		console.log(res,'详情');
		this.ruleForm=res.data.data
	})
	}

 }
};
</script>

<style lang="scss" scoped>

</style>
{

}
