<template>
    <div class="addchannal">
        <van-nav-bar
            title="频道定制"
            left-arrow
            @click-left="leave"
            />
            <div>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
                这里可以添加自己的频道然后显示在首页上边的标签里<br/>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        leave(){
           this.$emit('leave')
        }
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
</style>