<template>
	<div class="home">
		<router-view></router-view>
		<foot></foot>
	</div>
</template>

<script>
import foot from '@/components/common/foot.vue'
export default{
	name:'home',
	components:{
		foot
	}
}
</script>

<style>

</style>