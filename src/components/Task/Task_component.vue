<template>
    <div id="main" class="row" @click="IsBan(props.send.taskid)">
        <div id="imgs" class="col-md-2 d-none d-md-block position-relative">
            <img class="img-responsive" :src="url" alt="">
            <!-- <div class="position-absolute top-50 start-50 translate-middle">
                <p class="fw-bold" style="color:#fff">Bounty</p>
                <div>
                    
                    <svg t="1630768958781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2894" width="35" height="35"><path d="M512 96c229.76 0 416 186.24 416 416S741.76 928 512 928 96 741.76 96 512 282.24 96 512 96z m0 64C317.589333 160 160 317.589333 160 512S317.589333 864 512 864 864 706.410667 864 512 706.410667 160 512 160z m32 97.216l0.021333 75.477333c73.706667 9.152 126.101333 48.853333 128.64 105.6l0.106667 4.373334h-64c0-24.661333-36.266667-48-98.133333-48-62.912 0-98.133333 19.712-98.133334 48 0 25.386667 30.741333 46.592 91.946667 47.914666l6.186667 0.085334c96.469333 0 162.133333 43.541333 162.133333 112 0 64.512-52.693333 101.994667-128.746667 110.250666l-0.021333 76.544h-64V712.96c-75.114667-8.533333-128.810667-48.533333-131.392-105.962667l-0.085333-4.373333h64c0 24.661333 36.309333 48.021333 98.133333 48.021333 62.890667 0 98.133333-19.733333 98.133333-48 0-25.386667-30.72-46.592-91.925333-47.936l-12.458667-0.128c-93.056-1.856-155.882667-44.992-155.882666-111.936 0-65.301333 53.973333-102.890667 131.498666-110.549333l-0.021333-74.901333h64z" fill="#f2d551" p-id="2895"></path></svg>
                </div>
            </div> -->
            <div class="nav_back">
            </div>
        </div>
        
        <div id="text" class="col-md-10">
            <div class="col-md-12 fw-bold fs-4 d-flex justify-content-start">
                <span class="text-truncate" style="text-align:left">{{ props.send.title }}</span>
                <!-- <slot name="title"></slot> -->
                
            </div>
            <div class="col-md-12 fw-light fs-5 d-flex justify-content-start">
                <span style="color:#595a5a;font-size:20px">Bounty:{{ props.send.award }}$</span>
                <!-- <slot name="content"></slot> -->
            </div>
            <div class="col-md-12 fw-light fs-5 d-flex justify-content-start">
                <span class="text-truncate">{{ props.send.content }}</span>
                <!-- <slot name="content"></slot> -->
            </div>
            <div class="col-md-12 fw-light fs-6 d-flex justify-content-end">
                Updated on:{{ dadeDate.date+' '+dadeDate.time }}
                <!-- <slot name="createtime"></slot> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import { onMounted,reactive,ref } from "@vue/runtime-core";
name:'Taks_component'
const Router = useRouter();
const Store = useStore();
// 接收父组件数据
const props = defineProps({
    send: String,
});
const url = ref('')
onMounted(()=>{
    // url.value = `http://127.0.0.1:8000/media/${props.send.goods_image}`
    // url.value = `http://110.42.250.122:83/media/${props.send.goods_image}`
    // url.value = `http://104.168.211.39:82/media/${props.send.goods_image}`
    url.value = `https://ropeasy.com/media/${props.send.goods_image}`
    spli()
})
const gotodetails = (id) =>{
    if (Cookies.get('token') != undefined)
    {
        Store.commit('changetaskid',id);
        console.log(id);
        Router.push('/details');
    }
    else
    {
        Router.push('/user');
    }
};
// 判断封禁
const IsBan = (id) =>{
    if (Cookies.get('token') != undefined)
    {
        let data = {token:Cookies.get('token'),taskid:id};
        post("/api/v1/isban/",data).then((res) => {
            console.log(res.data.code);
            // 判断权限
            if (res.data.code == 410)
            {
                alert('You\'ve been banned')
            }
            else if (res.data.code == 411)
            {
                alert('You need to complete the initial mission first')
            }
            else if (res.data.code == 200)
            {
                Store.commit('changetaskid',id);
                console.log(id);
                Router.push('/details');
            }
        });
    }
    else
    {
        Router.push('/user');
    }
};
const dadeDate = reactive({
    date:'',
    time:'',
})
const spli = () =>{
    let x = props.send.data.split('T')
    dadeDate.date = x[0]
    let y = dadeDate.date.split('-')
    dadeDate.date = y[1]+'/'+y[2]+'/'+y[0]
    dadeDate.time = x[1]
    let z =dadeDate.time.split(':')
    dadeDate.time = z[0]+':'+z[1]
    console.log(dadeDate.time);
}
</script>

<style lang="scss" scoped>
#main{
    background-color:rgb(255, 255, 255);
    padding: 10px;
    margin-top: 10px;
    margin-right: 5px;
    margin-left: 5px;
    border: width 1px;
    border-style:solid;
    border-color:#f0f0f0ab;
    div {
        // height:120px;
        padding:0px
    }
        #imgs {
            background-color: #0070BA;
            // background-image: url(../../assets/6.jpg);
            background-repeat: no-repeat;
            padding:0px;
            float: left;
        }
        #text {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            // background-color: #83e4ba;
            padding:10px;
            float: right;
            div {
                height:40px
            }
        }
#text:hover{
    background-color: #8fcdf1;
}
}
.img-responsive {
    width: 100%;
    height:100%;
}
.nav_back{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(65, 65, 65, 0.5);
  opacity: 0.9;
}
</style>