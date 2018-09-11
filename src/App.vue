<template>
  <div id="app">
    <router-view></router-view>
    <foot v-show="isfoot"></foot>
  </div>
</template>

<script>
import foot from '@/components/common/foot.vue'
export default {
  name: 'App',
  data(){
    return{
      isfoot:true
    }
  },
  components:{
		foot
  },
  watch:{
    $route(){
      this.isfoot=this.$store.state.user.isfoot;
    }
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  const html=document.querySelector('html');
  let fontSize=window.innerWidth/10;
  fontSize=fontSize>50?50:fontSize;
  html.style.fontSize=fontSize+'px';
})
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
