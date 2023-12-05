<template>
	<div>

	</div>
</template>

<script>
import {loginAPI} from '../http/api'
export default {
 data() {
	 return {
		inof:{
			mobile: "13800000002",
  		password: 'hm#qd@23!'
		}
	 };
 },
 methods: {},
 computed: {},
 filters: {},
 watch: {},
	created() {
	loginAPI(this.inof).then(res=>{
		console.log(res);
	})
 }
};
</script>

<style lang="scss" scoped>

</style>
