<template>
    <div id="foot">
        <tabbar class="footer vux-1px-t">
            <tabbar-item selected link="/wechat">
                <i slot="icon" class="iconfont icon-weixin"></i>
                <span slot="label" class="span">微信</span>
            </tabbar-item>
            <tabbar-item link="/mailList">
                <i slot="icon" class="iconfont icon-tongxunlu"></i>
                <span slot="label" class="span">通讯录</span>
            </tabbar-item>
            <tabbar-item link="/find">
                <i slot="icon" class="iconfont icon-faxian"></i>
                <span slot="label" class="span">发现</span>
            </tabbar-item>
            <tabbar-item link="/me">
                <i slot="icon" class="iconfont icon-wo"></i>
                <span slot="label" class="span">我</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'foot',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style  scoped>
    .footer{
        position:fixed;
        bottom:0;
        right:0;
        height:1.8rem;
        padding-top:.1rem;
        box-sizing: border-box;
        text-align: center;
    }
    .iconfont{
        font-size:.8rem;
        margin-bottom:.1rem;
    }
    .span{
        text-align: center;
        display:inline-block;
        padding-top:.1rem;
    }
</style>    
