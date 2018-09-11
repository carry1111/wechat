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
        <div class="content">
            <!-- <div class="item" v-for="(item) in result" :key="item">
                <span class="span_right">{{item}}</span>
                <img :src="headimgurl" class="img">
            </div>
            <div class="item1" v-for="(item) in otherResult" :key="item">
                <img :src="otherHeadimgurl" class="img">
                <span class="span_left">{{item}}</span>
            </div> -->
            <div :class="{item:value.to_id==otherID,item1:!(value.to_id==otherID)}" v-for="(value,index) in allResult" :key="index">
                <img :src="headimgurl" v-if="value.to_id==otherID" :class="{img_right:value.to_id==otherID,img_left:!(value.to_id==otherID)}">
                <img :src="otherHeadimgurl" v-if="!(value.to_id==otherID)" :class="{img_right:value.to_id==otherID,img_left:!(value.to_id==otherID)}">
                <p :class="{span_right:value.to_id==otherID,span_left:!(value.to_id==otherID)}">{{value.message}}</p>
            </div>
        </div>
        <div class="footer">
            <span class="icon-yuyin iconfont voice"></span>
            <input type="text" class="text" v-model="text" @keyup.enter="send">
            <span class="icon-biaoqing iconfont biaoqing"></span>
            <span class="icon-tianjia1 iconfont tianjia" v-show="!isSend"></span>
            <input type="button" class="btn" value="发送" v-show="isSend" @click="send">
        </div>
	</div>
</template>

<script>
import top from '@/components/common/top'
export default{
    name:'chat',
    data(){
        return{
            headimgurl:'@/assets/images/left.jpg',
            otherHeadimgurl:'@/assets/images/right.jpg',
            text:'',
            otherID:'2985',
            self:'',
            allResult:[
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2986',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2985',message:'这'},
                {to_id:'2984',message:'这'},
            ]
        }
    },
    computed:{
        isSend(){
            if(this.text.trim()!=''){
                return true;
            }else{
                return false;
            }
        },
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        send(){
            
            if(this.text.trim()==''){
                return false;
            }
            this.allResult.push({to_id:'2985',message:this.text});
            this.text='';
        },
       
    },
    mounted(){
        
    },
	components:{
        top
    }
}
</script>

<style scoped>
	#chat{
        background:#f0f0f0;
        height:100%;
        width:100%;
        background-size:cover;
    }
    .content{
        background:#f0f0f0;
        margin-top:1.6rem;
        margin-bottom:1.8rem;
        padding-bottom:.3rem;
    }
    .item{
        text-align:right;
        padding-right:.2rem;
        padding-top:.2rem;
        /* width:70%; */
    }
    .item1{
        text-align:left;
        padding-left:.2rem;
        padding-top:.2rem;
        /* width:70%; */
    }
    .item::after,.item1::after{
        content:'';
        display:block;
        clear:both;
    }
    .img_left,.img_right{
        width:1rem;
        height:1rem;
        /* border-radius:.5rem; */
        /* vertical-align: top; */
        display:block;
        /* width:15%; */
    }
    .img_right{
        float:right;
    }
    .img_left{
        float:left;
    }
    .span_left,.span_right{
        font-size:.4rem;
        /* vertical-align: center;
        display:inline-block; */
        background:#fff;
        padding:0 .2rem;
        color:#000;
        max-width:58%;
        text-align:left;
        line-height:.4rem;
        position: relative;
        border-radius:.1rem;
        min-height: 1rem;
        line-height: 1rem;
        box-sizing: border-box;
    }
    .span_right{
        float:right;
        margin-right:.25rem;
        background: #49f777;
    }
    .span_left{
        float:left;
        margin-left:.25rem;
        background: #fff;
    }
    .span_left::after,.span_right::after{
        content: '';
        width: 0;
        height: 0;
        border-width: .15rem;
        border-style: solid;
        position: absolute;
        top:.4rem;
        transform:translateY(-50%);
        /* right:-.4rem; */
        
    }
    .span_right::after{
        right:-.3rem;
        border-color:transparent transparent transparent #49f777 ;
    }
    .span_left::after{
        left:-.3rem;
        border-color:transparent #fff transparent transparent;
    }
    .footer{
        position:fixed;
        bottom:0;
        left:0;
        background:#fff;
        width:100%;
        height:1.6rem;
        box-sizing:border-box;
    }
    .voice,.biaoqing,.tianjia{
        display:block;
        float:left;
        width:15%;
        text-align:center;
        font-size:1rem;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
    }
    .biaoqing{
        left:70%;
    }
    .tianjia{
        left:85%;
    }
    .text{
        border-bottom:1px solid #ccc;
        font-size:.45rem;
        padding:.2rem;
        display:block;
        float:left;
        width:55%;
        box-sizing: border-box;
        position:absolute;
        top:50%;
        left:15%;
        transform:translateY(-50%);
    }
    .btn{
        display:block;
        float:left;
        width:13%;
        box-sizing: border-box;
        padding:.2rem;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        left:85%;
        margin-right:2%;
        background: #ff5370;
        color:#fff;
    }
</style>