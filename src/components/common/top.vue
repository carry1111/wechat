<template>
    <div id="top">
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
        height:1.6rem;
        line-height:1.6rem;
        top:0;
        left:0;
        background:#484848;
        text-align:left;
    }
    #top::after{
        content:'';
        display:block;
        clear:both;
    }
    .iconfont{
        font-size:1rem;
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
        font-size:.6rem;
        padding-left:.1rem;
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
