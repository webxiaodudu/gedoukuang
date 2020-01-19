<template>
  <div class="home">
      <div class="addBtn"  @click="openAdd" style="z-index:2;">
        <van-icon  name="bars"/>
      </div>
      
      <van-tabs v-model="active" line-height="5">
        <van-tab v-for="(tab,index) in tabs" :key="index" :title="tab.title">{{tab.content.text}}</van-tab>
      </van-tabs>
      <transition name="van-slide-right">
        <AddChannel @leave="leaveAddChannel" v-show="isShowChannel" />
      </transition>
  </div>
</template>

<script>

import AddChannel from './components/addChannel' 
export default {
  name: 'home',
  data(){
    return {
      isShowChannel:false,
      active:0,
      tabs:[
        {
          title:"热推",
          content:{
            text:'热推内容'
          }
        },
        {
          title:"MMA",
          content:{
            text:'MMA内容'
          }
        },
         {
          title:"跆拳道",
          content:{
            text:'跆拳道'
          }
        },
          {
          title:"泰拳",
          content:{
            text:'泰拳'
          }
        },
          {
          title:"拳击",
          content:{
            text:'拳击'
          }
        }
      ]
    }
  },
  methods:{
    openAdd(){
      this.isShowChannel=true
    },
    leaveAddChannel(){
      this.isShowChannel=false;
    }
  },
  components:{
    AddChannel
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
