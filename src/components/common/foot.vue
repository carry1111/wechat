<template>
    <div id="foot">
        <tabbar class="footer vux-1px-t">
            <tabbar-item badge="1" selected link="/wechat">
                <img slot="icon" src="../../assets/images/wechat.png">
                <span slot="label">微信</span>
            </tabbar-item>
            <tabbar-item show-dot link="/mailList">
                <img slot="icon" src="../../assets/images/mailList.png">
                <span slot="label">通讯录</span>
            </tabbar-item>
            <tabbar-item link="/find">
                <img slot="icon" src="../../assets/images/find.png">
                <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item link="/me">
                <img slot="icon" src="../../assets/images/me.png">
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