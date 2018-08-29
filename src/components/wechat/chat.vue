<template>
	<div id="chat">
		<top titleText="微信">
            <div slot="back" @click="back">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <div slot="add">
                <span class="iconfont icon-gengduo"></span>
            </div>
        </top>
	</div>
</template>

<script>
import top from '@/components/common/top'
export default{
    name:'chat',
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
	components:{
        top
    }
}
</script>

<style scoped>
	
</style>