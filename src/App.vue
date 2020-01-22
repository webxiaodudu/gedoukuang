<template>
  <div id="app">
      <router-view/>
    <van-tabbar 
      v-model="active"
      inactive-color="#ccc"
      
    >
      <van-tabbar-item icon="wap-home" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="video" replace to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="comment" replace to="/community">社区</van-tabbar-item>
      <van-tabbar-item icon="manager" replace to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  
</template>
<script>
// document.querySelector('#app').addEventListener('touchstart',function(e){
//   e.stopPropagation();
//   e.preventDefault();
// })
export default {
  data(){
    return {
      active: 0
    }
  }
}
</script>
<style>
html,body{
  height:100%;
  
  font-family: Helvetica;
}
#app{
  height:100%;
  padding-bottom: 120px;
  box-sizing: border-box;
}
#app .van-tabbar{
  height:120px;
}
#app .van-tabbar-item__icon{
  font-size:60px;
}
</style>
