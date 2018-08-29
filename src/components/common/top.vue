<template>
    <div id="top">
        <!-- <div class="back">
            
        </div> -->
        <div class="back">
            <slot name="back">
                <!-- <i class="iconfont icon-fanhui"></i> -->
            </slot>
        </div>
        <div class="title">
            <slot name="title">
                {{titleText}}
            </slot>
        </div>
        <div class="add">
            <slot name="add">
                <i class="iconfont icon-tianjia"></i>
            </slot>
        </div>
        <div class="search">
            <slot name="search">
                <!-- <i class="iconfont icon-sousuo"></i> -->
            </slot>
        </div>
        
    </div>
</template>

<script>

export default {
    name:'top',
    props:{
        'titleText': {    
            type:String,
            default:'微信'
        }
    }
}
</script>

<style scoped>
    #top{
        position:fixed;
        width:100%;
        z-index:1000;
        height:3.5rem;
        line-height:3.5rem;
        top:0;
        left:0;
        background:#ccc;
        text-align:left;
    }
    .iconfont{
        font-size:2.2rem;
    }
    .back,.title,.search,.add{
        float:left;
        color:#fff;
        box-sizing:border-box;
    }
    .back{
        width:14%;
    }
    .title{
        width:60%;
        font-size:1.3rem;
        padding-left:.5rem;
    }
    .search{
        float:right;
        width:12%;
    }
    .add{
        float:right;
        width:14%;
    }
    
</style>    
