<template>
    <div class="addchannal">
        <van-nav-bar
            title="频道定制"
            left-arrow
            @click-left="leave"
            />
            <div class="channal-box" >
                    asdasdsa
            </div>
    </div>
</template>
  
<script>
export default {
    data(){
        return {
            num:0,
            
        }
    },
    methods:{
       
        leave(){
           this.$emit('leave')
        },
      
      
    }
}
</script>
<style>
.addchannal .van-nav-bar{
    height:120px;
    line-height:120px;
    
}
.addchannal .van-nav-bar__title{
    font-size:40px;
    font-weight:bold;
}
.addchannal .van-nav-bar__left{
    top:8px;
}
.addchannal  .van-icon-arrow-left:before{
    font-size:50px;
    font-weight:bold;
}
.obox{
    height:200px;
    width:200px;
    background:red;
    color:#fff;
}
</style>
<style  scoped>
.addchannal{
    width:100%;
    height:100%;
    background:#fff;
    position:absolute;
    left:0;
    top:0;
    z-index:3;
}
.channal-box{
    height:calc(100% - 120px );
    box-sizing: border-box;
}
</style>