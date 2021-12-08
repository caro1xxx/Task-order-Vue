<template>
    <div class="container" style="margin-top:70px">
        <div class="row"  v-if="isshow.isshowdetalis">
            <div v-if="Regtip.isshow" class="col-md-8 offset-md-2 d-flex justify-content-start">
                <div class="alert alert-warning alert-dismissible fade show col-md-12" role="alert">
                    <strong class="fs-6">Tip: {{ Regtip.hint }}</strong>
                    <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <svg @click="gotoTask" t="1630722163157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M512.9 137.9C306.4 137.9 139 305.3 139 511.8c0 206.5 167.4 373.9 373.9 373.9s373.9-167.4 373.9-373.9c0.1-206.5-167.4-373.9-373.9-373.9z m86.5 516.6c6.2 6.2 6.2 16.4 0 22.6l-27.2 27.2c-6.2 6.2-16.4 6.2-22.6 0l-154-154-27.2-27.2c-6.2-6.2-6.2-16.4 0-22.6l27.2-27.2 154-154c6.2-6.2 16.4-6.2 22.6 0l27.2 27.2c6.2 6.2 6.2 16.4 0 22.6L456.8 511.8l142.6 142.7z" fill="#e6e6e6" p-id="2685"></path></svg>
                <span class="fw-bold fs-5">Go back</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold fs-3">{{ taskdetails.data[0].fields.title }}&nbsp;&nbsp;Task number:#{{ taskdetails.data[0].fields.taskid }}</span>
            </div>
            <div class="col-md-8 offset-md-2" id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-5">Details</span>
                    </div>
                    <div id="details" class="col-md-12">
                        <p class="fw-light fs-5">&nbsp;&nbsp;{{ taskdetails.data[0].fields.content }}</p>
                        <!-- <p>No more....</p> -->
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 " id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">With pictures</span>
                    </div>
                    <div class="col-md-12 fs-5">
                        <p>No more....</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 " id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">Warning</span>
                    </div>
                    <div class="col-md-12" id="details">
                        <p class="fs-5">&nbsp;&nbsp;You must complete the task within the specified time, otherwise the task will be invalid. Please submit the task to complete the screenshot before the task deadline, otherwise you will not be rewarded</p>
                    </div>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 " id="body">
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-start">
                        <span class="fw-bold fs-3">Submit task</span>
                    </div>
                    <div class="col-md-12">
                         <el-form ref="form" :model="form" class="row">
                            <el-form-item label="" class="col-md-3">
                                <input type="file" @change="getImageFile" id="img">
                            </el-form-item>
                            <el-form-item class="col-md-1">
                                <el-button type="primary" @click="onSubmit">submit</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'Submit'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import { onMounted,reactive,ref } from "vue";
const Router = useRouter();
const Store = useStore();
// 图片数据
const formdata = reactive({
    form: {
        goods_title: '',
        goods_price: '',
        goods_image: '',
        goods_kind: '',
    },
})
const isshow = reactive({
    isshowdetalis:false
})
const Regtip = reactive({
    isshow:false,
    hint:'',
});
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
            }
        }
});
const Taskdata = reactive({
    taskid:Number
})
// 从vuex获取任务id
const gettaskid = () =>{
    Taskdata.taskid = Store.state.submitid
};
// 请求数据
const gettaskDetails = () =>{
    let token = Cookies.get('token');
    let data = {token:Cookies.get('token'),taskid:Taskdata.taskid};
    post("/api/v1/taskdetails/",data).then((res) => {
    //JSON.parse把字符串转为json对象，\自动消失
    taskdetails.data = JSON.parse(res.data.data);
    console.log(res.data.data);
    isshow.isshowdetalis = true;
});
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
        Router.push('/task');
    }
});
// 返回上一页
const gotoTask = () =>{
    Router.push('/user');
};
// 关闭提示
const closeReghint = () =>{
    Regtip.isshow = false;
};
// 上传图片数据
const getImageFile = (e) => {
    let file = e.target.files[0];
    formdata.form.goods_image = file;
}
// 上传数据
const onSubmit=() =>{
    // console.log(typeof(formdata.form.goods_image));
    if (formdata.form.goods_image == '')
    {
        Regtip.isshow =true
        Regtip.hint ='Please select a screenshot file'
    }
    else
    {
        let formData = new FormData();
        let token = Cookies.get('token')
        formData.append('goods_image', formdata.form.goods_image);
        formData.append('goods_taskid', taskdetails.data[0].fields.taskid);
        formData.append('goods_award', taskdetails.data[0].fields.award);
        formData.append('goods_title', taskdetails.data[0].fields.title);
        formData.append('token', token);
        post("/api/v1/imgupload/",formData).then((res) => {
            Regtip.isshow = true;
            Regtip.hint = res.data.msg
    });
    }
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