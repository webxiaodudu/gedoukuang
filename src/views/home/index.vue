<template>
  <div class="home">
      <div class="addBtn"  @click="openAdd" style="z-index:2;">
        <van-icon  name="bars"/>
      </div>
      
      <van-tabs v-model="active" line-height="5">
        <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">
          <channelList/>
        </van-tab>
      </van-tabs>
      <transition name="van-slide-right">
        <AddChannel @leave="leaveAddChannel" v-show="isShowChannel" />
      </transition>
  </div>
</template>

<script>

import AddChannel from './components/addChannel'
import channelList from '@/components/channellist'
export default {
  name: 'home',
  data(){
    return {
      isShowChannel:false,
      active:0,
      tabs:[
        {
          title:"热推"
        }
      ]
    }
  },
  methods:{
    openAdd(){
      this.isShowChannel=true
    },
    leaveAddChannel(checksChannel){
      //选择频道leave时候的回调
      this.isShowChannel=false;
      console.log(checksChannel)
      // if(checksChannel.length){
      //   this.tabs.forEach(tabNode=>{
      //    checksChannel = checksChannel.filter(checkNode=>{
      //       return checkNode.id!=tabNode.id;
      //     })
      //   })
      // }
      this.tabs=[{
          title:"热推"
        }]
     this.tabs = this.tabs.concat(checksChannel)

    }
  },
  components:{
    AddChannel,
    channelList
  }
 
}
</script>
<style>

.home .van-tabs--line .van-tabs__wrap{
  height:120px;
  padding-right:80px;
}
.home .van-tab{
  line-height:120px;
  font-size:32px; 
  font-weight:bold;
}
</style>
<style scoped>
.home{
  position:relative;
  height:100%;
  box-sizing: border-box;
}
.addBtn{
  position: absolute;
  right:13px;
  top:38px;
  font-size:40px;
  font-weight:bold;
}
</style>
