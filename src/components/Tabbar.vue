<template>
    <mt-tabbar v-model="selected" id="Tabbar" :fixed=true>
        <mt-tab-item href="#/home" id="1">
          <img v-show="this.$route.name ==='Home'" slot="icon" src="../assets/svg/home.svg">
          <img v-show="this.$route.name !== 'Home'" slot="icon" src="../assets/svg/home-hover.svg">
          <span v-show="this.$route.name === 'Home'" style="color:#ffcd00;">首页</span>
          <span v-show="this.$route.name !== 'Home'" style="color:#8a8a8a;">首页</span>
        </mt-tab-item>
        <mt-tab-item  href="#/publish" id="2">
          <img v-show="this.$route.name === 'Publish'" slot="icon" src="../assets/svg/publish.svg">
          <img v-show="this.$route.name !== 'Publish'" slot="icon" src="../assets/svg/publish-hover.svg">
          <span v-show="this.$route.name === 'Publish'" style="color:#ffcd00;">发表</span>
          <span v-show="this.$route.name !== 'Publish'" style="color:#8a8a8a;">发表</span>
        </mt-tab-item>
        <mt-tab-item  href="#/message" id="3">
          <img v-show="this.$route.name === 'Message'" slot="icon" src="../assets/svg/message.svg">
          <img v-show="this.$route.name !== 'Message'" slot="icon" src="../assets/svg/message-hover.svg">
          <span v-show="this.$route.name === 'Message'" style="color:#ffcd00;">消息</span>
          <span v-show="this.$route.name !== 'Message'" style="color:#8a8a8a;">消息</span>
        </mt-tab-item>
		<mt-tab-item href="#/more" id="4">
			<img v-show="this.$route.name === 'More'||this.$route.name === 'User'" slot="icon" src="../assets/svg/more.svg">
			<img v-show="this.$route.name != 'More'&&this.$route.name != 'User'" slot="icon" src="../assets/svg/more-hover.svg">
			<span v-show="this.$route.name === 'More'||this.$route.name === 'User'" style="color:#ffcd00;">我的</span>
			<span v-show="this.$route.name != 'More'&&this.$route.name != 'User'" style="color:#8a8a8a;">我的</span>
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default{
      name:'Tabbar',
      data(){
          return{
            selected:'',
            fixed:true,
        }
      },
      mounted(){

      },
      methods:{

      },
      watch:{
      }
    }

</script>

<style scpoed>
  @import '../css/common.css';
  #Tabbar a{
    color:#8a8a8a;
    font-size:0.3rem;
    background-color:#fff !important;
  }
  .mint-tab-item .mint-tab-item-icon{
    width:0.40rem !important;
    height:0.40rem !important;
  }
  .mint-tab-item-label{
    font-size:0.32rem !important;
  }
</style>
