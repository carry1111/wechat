<template>
	<div id="wechat">
		<top titleText="微信">
			<div slot="search">
                <span class="iconfont icon-sousuo"></span>
            </div>
		</top>
		<div v-for="item in result" :key="item.name" class="item vux-1px-b" @click="chat">
			<p>{{item.name}}</p>
			<p class="title">{{item.title}}</p>
		</div>
	</div>
</template>

<script>
import top from '@/components/common/top'
export default{
	name:'wechat',
	data(){
		return{
			result:[
				{name:'carry',title:'这是一条聊天信息'},
				{name:'carry1',title:'这是一条聊天信息'},
				{name:'carry2',title:'这是一条聊天信息'},
				{name:'carry3',title:'这是一条聊天信息'},
				{name:'carry4',title:'这是一条聊天信息'},
				{name:'carry5',title:'这是一条聊天信息'},
				{name:'carry6',title:'这是一条聊天信息'},
				{name:'carry7',title:'这是一条聊天信息'},
				{name:'carry8',title:'这是一条聊天信息'},
				{name:'carry9',title:'这是一条聊天信息'},
				{name:'carry0',title:'这是一条聊天信息'},
				{name:'carry11',title:'这是一条聊天信息'},
				{name:'carry12',title:'这是一条聊天信息'},
				{name:'carry13',title:'这是一条聊天信息'},
			]
		}
	},
	methods:{
		chat(){
			this.$router.push('/chat');
		}
	},
	components:{
		top
	}
}
</script>

<style scoped>
	#wechat{
		margin-top:3.5rem;
		margin-bottom:4rem;
	}
	.item{
		font-size:1.5rem;
		text-align: left;
		padding:1rem;
	}
	.title{
		font-size:1rem;
		padding-top:.5rem;
		box-sizing: border-box;
	}
</style>