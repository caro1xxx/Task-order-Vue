<template>
    <div class="container" style="margin-top:70px;">
        <div class="row"  v-if="isshow.isshowdetalis">
            <div v-if="Regtip.isshow" class="col-md-8 offset-md-2 d-flex justify-content-start">
                <div class="alert alert-warning alert-dismissible fade show col-md-12" role="alert">
                    <strong class="fs-6">Tip:&nbsp;&nbsp;&nbsp;{{ Regtip.hint }}</strong>
                    <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <!-- <svg  t="1630722163157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M512.9 137.9C306.4 137.9 139 305.3 139 511.8c0 206.5 167.4 373.9 373.9 373.9s373.9-167.4 373.9-373.9c0.1-206.5-167.4-373.9-373.9-373.9z m86.5 516.6c6.2 6.2 6.2 16.4 0 22.6l-27.2 27.2c-6.2 6.2-16.4 6.2-22.6 0l-154-154-27.2-27.2c-6.2-6.2-6.2-16.4 0-22.6l27.2-27.2 154-154c6.2-6.2 16.4-6.2 22.6 0l27.2 27.2c6.2 6.2 6.2 16.4 0 22.6L456.8 511.8l142.6 142.7z" fill="#e6e6e6" p-id="2685"></path></svg> -->
                <svg @click="gotoTask" t="1632546710281" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1194" width="32" height="32"><path d="M512.105912 80.83812c-237.365082 0-429.779394 192.56883-429.779394 430.134481 0 237.564627 192.414311 430.132434 429.779394 430.132434 237.387595 0 429.801906-192.567807 429.801906-430.132434C941.907818 273.40695 749.494531 80.83812 512.105912 80.83812zM605.570607 696.710862c10.212596 10.166547 11.227716 25.591865 2.321882 34.477232-8.92937 8.885368-24.465205 7.844665-34.675754-2.297322l-199.88547-197.651592c-5.79089-5.7694-8.53028-13.19451-8.266267-20.180622-0.309038-7.048533 2.432399-14.541181 8.245801-20.35356l199.905936-197.651592c10.210549-10.166547 25.724895-11.183713 34.675754-2.298346 8.905834 8.884344 7.891737 24.311709-2.321882 34.477232L417.64554 510.972601 605.570607 696.710862z" p-id="1195" fill="#d81e06"></path></svg>
                <span class="fw-bold fs-5">Go back</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span style="text-align:auto" class="fw-bold fs-3" >{{ taskdetails.data[0].fields.title }}</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold fs-3" >Task number:#{{ taskdetails.data[0].fields.taskid }}</span>
            </div>
            <div class="col-md-8 offset-md-2" id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">Details</span>
                    </div>
                    <div id="details" class="col-md-12">
                        <p class="fw-light fs-3">&nbsp;&nbsp;{{ taskdetails.data[0].fields.content }}</p>
                        <!-- <p>No more....</p> -->
                        <p @click="gotourl(link)" class="fw-light fs-3">Jump link:&nbsp;&nbsp;{{ link }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 " id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">With pictures</span>
                    </div>
                    <div class="col-md-6 offset-md-3 fs-5 d-flex justify-content-center">
                        <img class="img-responsive" :src="url" alt="No more...">
                        <!-- <p>No more....</p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 " id="body" style="margin-bottom:90px">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">Warning</span>
                    </div>
                    <div class="col-md-12 fs-5" id="details">
                        <p>&nbsp;&nbsp;You must complete the task within the specified time, otherwise the task will be invalid. Please submit the task to complete the screenshot before the task deadline, otherwise you will not be rewarded</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 fixed-bottom" id="body2">
                <div class="row">
                    <div class="col-md-5 offset-md-5 text-light">
                        <span>Complete missions to get</span>
                        <span class="fw-bold fs-2">&nbsp;{{ taskdetails.data[0].fields.award }}$</span>
                        <button style="margin-bottom:20px;" @click="addTask" type="button" class="btn btn-primary">Orders</button>
                        <svg style="margin-bottom:20px;" t="1630812886503" class="icon" viewBox="0 0 1195 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11862" width="25" height="25"><path d="M572.804983 998.770594a85.292109 85.292109 0 0 0 0-121.114794L291.341024 597.044762H1109.292348a85.292109 85.292109 0 0 0 0-170.584218H291.341024l281.463959-280.611038A85.292109 85.292109 0 0 0 451.690189 24.734712l-426.460544 426.460544a85.292109 85.292109 0 0 0 0 121.114794l426.460544 426.460544a85.292109 85.292109 0 0 0 121.114794 0z" fill="#ffffff" p-id="11863"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'Details'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import { onMounted,reactive,ref } from "vue";
const Router = useRouter();
const Store = useStore();
const isshow = reactive({
    isshowdetalis:false
})
const Regtip = reactive({
    isshow:false,
    hint:'',
})
const taskdetails = reactive({
    data:{
            model:'', 
            pk: Number, 
            fields: 
            {
                title: '', 
                data:  '', 
                content:  '',
                state: Boolean, 
                award:  '',
                id:Number,
                taskid:Number,
                goods_image:'',
            }
        }
});
const link = ref('')
const Taskdata = reactive({
    taskid:Number
})
const url =ref('')
// 从vuex获取任务id
const gettaskid = () =>{
    Taskdata.taskid = Store.state.taskid
};
// 请求数据
const gettaskDetails = () =>{
    let token = Cookies.get('token');
    let data = {token:Cookies.get('token'),taskid:Taskdata.taskid};
    post("/api/v1/taskdetails/",data).then((res) => {
    //JSON.parse把字符串转为json对象，\自动消失
    taskdetails.data = JSON.parse(res.data.data);
    const re = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
    console.log(taskdetails.data[0].fields.content);
    let x = re.exec(taskdetails.data[0].fields.content);
    taskdetails.data[0].fields.content = taskdetails.data[0].fields.content.split(x[0])[0]
    link.value = x[0];
    isshow.isshowdetalis = true;
    // url.value = `http://127.0.0.1:8000/media/${taskdetails.data[0].fields.goods_image}`
    // url.value = `http://110.42.250.122:83/media/${taskdetails.data[0].fields.goods_image}`
    // url.value = `http://104.168.211.39:82/media/${taskdetails.data[0].fields.goods_image}`
    url.value = `https://ropeasy.com/media/${taskdetails.data[0].fields.goods_image}`
});
}
const reg = () => {
    
}
// 判断vuex中的id
onMounted(()=>{
    gettaskid()
    if (Taskdata.taskid != 0)
    {
        // 请求数据
        console.log(Taskdata.taskid);
        gettaskDetails();
    }
    else
    {
        Router.back();
    }
});
// 返回上一页
const gotoTask = () =>{
    Router.push('/task');
};
//添加此任务
const addTask = () =>{
    let token = Cookies.get('token');
    let data = {token:Cookies.get('token'),taskid:Taskdata.taskid};
    post("/api/v1/choose/",data).then((res) => {
        console.log(res);
        Regtip.isshow = true;
        Regtip.hint = res.data.msg;
        hits(res.data.msg)
        // alert(res.data.msg+'\n' + );
});
// cofirm
const hits = (msg) => {
    if (confirm(msg +'\n'+'If you need to get help, please click OK to add customer service WhatsApp')==true){ 
        window.open('https://api.whatsapp.com/qr/H2UDRYBVREJ7N1','_blank'); 
    }else{ 
        return false; 
    } 
}
};
// 关闭注册提示
const closeReghint = () =>{
    Regtip.isshow = false;
};
// 跳转连接
const gotourl = (url) =>{
    // console.log(url);
    // const re = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
    // let x = re.exec(url)
    // console.log(x);
    window.open(url,'_blank')
}
</script>

<style lang="scss" scoped>
#body{
    padding: 10px;
    margin-top: 10px;
    background-color:rgb(255, 255, 255);
    border: width 1px;
    border-style:solid;
    border-color:#f0f0f0ab;
    span{
        line-height: 35px;
    }
    #details{
        text-align:left;
        padding: 0px 20px;
        word-wrap:break-word;
        word-break:break-all;
    }
}
#body2{
    padding: 5px;
    margin-top: 10px;
    height: 70px;
    line-height: 60px;
    background-color:#0070BA;
    button{
        margin-left: 10px;
        margin-right: 10px;
    }
}
.img-responsive {
    width: 100%;
    height:100%;
}

</style>