<template>
	<div id="mailList">
		<top titleText="微信">
			<div slot="search">
                <span class="iconfont icon-sousuo"></span>
            </div>
		</top>
		<div class="item" v-for="(item,index) in result" :key="index">
			{{item.name}}
		</div>
	</div>
</template>

<script>
import top from '@/components/common/top'
export default{
	name:'mailList',
	data(){
		return{
			result:[
				{name:'吴盛杰'},
				{name:'詹姆斯'},
				{name:'欧文'},
				{name:'安东尼'},
				{name:'韦德'},
				{name:'波什'},
				{name:'科比'},
				{name:'霍华德'},
				{name:'那时'},
				{name:'杜兰特'}
			]
		}
	},
	components:{
		top
	}
}
</script>

<style scoped>
	#mailList{
		background:#f0f0f0;
		margin-top:1.8rem;
		font-size:.5rem;
	}
	.item{
		background:#fff;
		padding:.3rem 0;
		text-align: left;
		margin-bottom:.05rem;
	}
</style>