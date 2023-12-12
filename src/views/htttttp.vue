<template>
	<div>
		<button @click="dian">点</button>
	</div>
</template>

<script>
import { mapActions,mapState,mapMutations } from 'vuex';
export default {
 data() {
	 return {

	 };
 },
 methods: {
	...mapActions('routerint',['getroleAPI','getpermissionAPI']),
	...mapMutations('routerint',['guo']),
	dian(){
		// const commonElements = this.list.filter((element) => this.shops.filter((value) => value === element).length > 0)
		// // const result = this.list.filter(item => this.shops.code.includes(item))
		// console.log(commonElements,'111111111');
		// // console.log(result,'111111111');
		this.guo()
	}

 },
 computed: {
	...mapState('routerint',['list','shops'])
 },
 filters: {},
 watch: {},
 created(){

	this.getroleAPI()
	this.getpermissionAPI()
	// this.guo()
 }
};
</script>

<style lang="scss" scoped>

</style>
