<template>
    <div class="container" style="margin-top:70px">
        <div class="row"  v-if="isshow.isshowdetalis">
            <div v-if="Regtip.isshow" class="col-md-8 offset-md-2 d-flex justify-content-start">
                <div class="alert alert-warning alert-dismissible fade show col-md-12" role="alert">
                    <strong>Tip:</strong> {{ Regtip.hint }}
                    <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <svg @click="gotoTask" t="1630722163157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M512.9 137.9C306.4 137.9 139 305.3 139 511.8c0 206.5 167.4 373.9 373.9 373.9s373.9-167.4 373.9-373.9c0.1-206.5-167.4-373.9-373.9-373.9z m86.5 516.6c6.2 6.2 6.2 16.4 0 22.6l-27.2 27.2c-6.2 6.2-16.4 6.2-22.6 0l-154-154-27.2-27.2c-6.2-6.2-6.2-16.4 0-22.6l27.2-27.2 154-154c6.2-6.2 16.4-6.2 22.6 0l27.2 27.2c6.2 6.2 6.2 16.4 0 22.6L456.8 511.8l142.6 142.7z" fill="#e6e6e6" p-id="2685"></path></svg>
                <span class="fw-bold">Go back</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">任务名称:{{ taskDetailsdata.data.title }}</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">任务编号:#{{ taskDetailsdata.data.taskid }}</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">任务金额:{{ taskDetailsdata.data.award }}$</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">提交者唯一id:{{ taskDetailsdata.data.submitter_token }}</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">提交时间:{{ taskDetailsdata.data.time }}</span>
            </div>
            <div class="col-md-8 offset-md-2 " id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-6">截图</span>
                    </div>
                    <div class="col-md-12">
                        <img :src="imgs.img" width="600" max-height=auto alt="">
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">处理</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button @click="changestate('1')" type="button" class="btn btn-success" style="margin-right:30px">合格</button>
                <button @click="changestate('2')" type="button" class="btn btn-danger">不合格</button>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'Dealwith'
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
});
// 容器
const taskDetailsdata = reactive({
    data:{
        award:String,
        img:String,
        submitter_token:String,
        taskid:Number,
        time:String,
        title:String,
    }
});
// 图片容器
const imgs = reactive({
    img:'',
})
const Taskdata = reactive({
    taskid:Number,
    submitter_token:String,
});
// 改变状态数据容器
const changeStatedata = reactive({
    taskid:Number,
    submitter_token:String,
})
// 从vuex获取任务id
const gettaskid = () =>{
    Taskdata.taskid = Store.state.TaskReviewData
    Taskdata.submitter_token = Store.state.submitter_token
    console.log(Taskdata.taskid);
    console.log(Taskdata.submitter_token);
};
// 请求数据
const gettaskDetails = () =>{
    let data = {taskid:Taskdata.taskid,submitter_token:Taskdata.submitter_token};
    post("/api/v1/dealwithtask/",data).then((res) => {
        taskDetailsdata.data = res.data;
        // 处理图片url
        // imgs.img = `http://127.0.0.1:8000/media/${res.data.img}`;
        // imgs.img = `http://110.42.250.122:83/media/${res.data.img}`;
        // imgs.img = `http://104.168.211.39:82/media/${res.data.img}`;
        imgs.img = `https://ropeasy.com/media/${res.data.img}`;
        isshow.isshowdetalis = true;
        changeStatedata.taskid = taskDetailsdata.data.taskid;
        changeStatedata.submitter_token = taskDetailsdata.data.submitter_token;
});
}
// 判断vuex中的id
onMounted(()=>{
    gettaskid()
    if (Taskdata.taskid != 0)
    {
        // 请求数据
        gettaskDetails();
    }
    else
    {
        Router.back();
    }
});
// 返回上一页
const gotoTask = () =>{
    Router.back();
};
// 关闭注册提示
const closeReghint = () =>{
    Regtip.isshow = false;
};
// 改变状态
const changestate = (state) => {
    let data = {taskid:changeStatedata.taskid,submitter_token:changeStatedata.submitter_token,state:state,title:taskDetailsdata.data.title};
    post("/api/v1/audittask/",data).then((res) => {
        Regtip.hint = res.data.msg
        Regtip.isshow = true;
        console.log(res.data);
        if (res.data.code == '200')
        {
            Regtip.hint = res.data.msg + ' 2秒之后将返回上一页';
            setTimeout(() => {
                Router.back();
            },2000);
        }
});
}
</script>

<style lang="scss" scoped>
#body{
    padding: 5px;
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
    background-color:#42b983;
    button{
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>