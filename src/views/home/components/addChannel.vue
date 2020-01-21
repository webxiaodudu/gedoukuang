<template>
    <div class="addchannal">
        <van-nav-bar
            title="频道定制"
            left-arrow
            @click-left="leave"
            />
            <div class="channal-box" >
                  <div class="my-channal-box">
                     <h6 class="title"><span class="big-t">我的频道</span></h6>
                     <div class="user-checks-box">
                         <draggable tag="ul" v-model="checkList"  class="user-checks-list clearFix">
                                <v-touch tag="li"  v-for="(item,index) in checkList" :key="index" @tap="delChannel(index)">
                                    <div>
                                        <img :src="item.url"  />
                                    </div>
                                    <p>{{item.title}}</p>
                                    <van-icon name="clear" class="del-ico" />
                                </v-touch>
                         </draggable>
                     </div>
                     <h6 class="title"><span class="big-t">更多频道 </span><span class="small-t">点击添加我的频道</span></h6>

                     <div class="more-checks-box">
                         <ul class="more-list clearFix">
                             <v-touch tag="li" class="channal-item" v-for="(item,index) in list" :key="index" @tap="addChannel(index)">
                                 <div>
                                     <img :src="item.url"  />
                                 </div>
                                 <p>{{item.title}}</p>
                                 <van-icon name="add" class="add-ico" />
                             </v-touch>
                         </ul>
                         
                     </div>
                  </div>  
            </div>
    </div>
</template>
  
<script>
import draggable from 'vuedraggable'
export default {
    data(){
        return {
            num:0,
            checkList:[],
            list:[
                {id:'1',url:'/static/images/boji.png',title:'自由搏击'},  
                {id:'2',url:'/static/images/mma.jpg',title:'综合格斗'},
                {id:'3',url:'/static/images/quanji.png',title:'拳击'},
                {id:'4',url:'/static/images/tai.jpg',title:'泰拳'},
                {id:'5',url:'/static/images/taiquandao.png',title:'跆拳道'},
                {id:'6',url:'/static/images/koushoudao.jpg',title:'空手道'},
                {id:'7',url:'/static/images/roudao.png',title:'柔道'},
                {id:'8',url:'/static/images/wushu.jpg',title:'武术'},
                {id:'9',url:'/static/images/jiandao.jpg',title:'剑道'},
                {id:'10',url:'/static/images/jiama.jpg',title:'马伽术'},
                {id:'11',url:'/static/images/jiequandao.jpg',title:'截拳道'},
                {id:'12',url:'/static/images/other.jpg',title:'其它'},
            ]
            
        }
    },
    methods:{
       addChannel(index){
          const [addItem] = this.list.splice(index,1);
          this.checkList.push(addItem)
       },
       delChannel(index){
          const [delItem] = this.checkList.splice(index,1);
          this.list.push(delItem)
       },
        leave(){
           this.$emit('leave',this.checkList)
        },
      
    },
    components:{
        draggable
    }
}
</script>
<style>
.clearFix::after{
    clear:both;
    content: '';
    display: block;
}
.flip-list-move{
    transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
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
h6{
    margin:0;
    padding:0;
    font-weight:normal;
}
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
.my-channal-box{
    height:100%;
    padding:2px;
     box-sizing: border-box;
}
.my-channal-box span{
    display:inline-block;
    margin-right:20px;
    font-size:30px;
    
}
.my-channal-box .title{
    color:#3F4146;

}
.my-channal-box .title .small-t{
    color:#9B9EA3;
}
.user-checks-box{
    padding:20px 0;
    box-sizing: border-box;
}
.more-checks-box{
    padding-top:30px;
}
.more-list{
   
}
.more-list li ,.user-checks-list li{
    float: left;
    width:154px;
    height:154px;
    position:relative;
    padding:15px;
    border:1px dashed #ccc;
    margin-right:-2px;
    margin-bottom:-2px;
}
.more-list li div,.user-checks-list li div{
    width:100px;
    height:100px;
    margin:0 auto;
}
.more-list li img,.user-checks-list li img{
    width:100px;
    height:100px;
}
.more-list li p,.user-checks-list li p{
    margin:0;
    text-align:center;
}
.more-list .add-ico{
    position:absolute;
    right:5px;
    top:5px;
    font-size:40px;
    color:rgb(129, 177, 34);
}
.user-checks-list .del-ico{
    position:absolute;
    right:5px;
    top:5px;
    font-size:40px;
    color:tomato;
}
</style>