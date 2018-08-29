<template>
    <div id="foot">
        <tabbar class="footer vux-1px-t">
            <tabbar-item selected link="/wechat">
                <i slot="icon" class="iconfont icon-weixin"></i>
                <span slot="label">微信</span>
            </tabbar-item>
            <tabbar-item link="/mailList">
                <i slot="icon" class="iconfont icon-tongxunlu"></i>
                <span slot="label">通讯录</span>
            </tabbar-item>
            <tabbar-item link="/find">
                <i slot="icon" class="iconfont icon-faxian"></i>
                <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item link="/me">
                <i slot="icon" class="iconfont icon-wo"></i>
                <span slot="label">我</span>
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
        height:4rem;
        padding-top:.5rem;
        box-sizing: border-box;
    }
</style>    
