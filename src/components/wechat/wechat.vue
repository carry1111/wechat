<template>
	<div id="wechat">
		<div v-for="item in result" :key="item.name" class="item vux-1px-b">
			{{item.name}}
		</div>
	</div>
</template>

<script>
export default{
	name:'wechat',
	data(){
		return{
			result:[
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
				{name:'carry'},
			]
		}
	}
}
</script>

<style scoped>
	#wechat{
		margin-bottom:4rem;
	}
	.item{
		font-size:1.5rem;
		text-align: left;
		padding:.5rem;
	}
</style>