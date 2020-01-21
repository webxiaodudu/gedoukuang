<template>
    <div class="channel-content">
        <van-pull-refresh v-model="isLoading" :head-height="60"  @refresh="onRefresh"> 
            <van-loading style="margin-top:20px;"  size="24px" slot="loading"><span style="font-size:18px;">加载中...</span></van-loading>
            <p slot="loosing" style="font-size:18px;">释放即可刷新....</p>
            <div class="channel-wrap">
                <!--焦点图-->
                    <div class="focus-box">
                        <van-swipe :autoplay="3000" :show-indicators="false" :height="100">
                            <van-swipe-item>
                                <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579604172358&di=4294774a5a8592f5dbcf2f4e9f9272e3&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180128%2F7975d1b069d741ffa47fda8cff752967.jpeg" />
                            </van-swipe-item>
                            <van-swipe-item>
                                <img   src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579604254181&di=650d86617d69c4ecd3a10e6356af5ef4&imgtype=0&src=http%3A%2F%2Fp0.ssl.cdn.btime.com%2Ft01d12a5d6b87ae836c.gif">
                            </van-swipe-item>
                        </van-swipe>
                    </div>
                    <ul>
                        <li v-for="item in 100" :key="item">test{{item}}</li>
                    </ul>
            </div>
             
        </van-pull-refresh>
       
    </div>
</template>
<script>
import http from 'utils/http.js';
import { Toast } from 'vant';
export default {
    data(){
        return {
            isLoading:false
        }
    },
    methods:{
        onRefresh(){
            setTimeout(() => {
                     Toast.success('刷新完成！');
                    this.isLoading = false;
                }, 3000);
            
        }
    },
    created(){
        http.post('/aaa',{})
    }
}
</script>
<style scoped>
.channel-wrap{
}
.channel-wrap .van-swipe-item img{
    width:100%;
    height:100%;
}


</style>