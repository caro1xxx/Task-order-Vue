<template>
    <div class="container" style="margin-top:70px">
        <div class="row">
            <!-- <div v-if="Regtip.isshow" class="col-md-8 offset-md-2 d-flex justify-content-start">
                <div class="alert alert-warning alert-dismissible fade show col-md-12" role="alert">
                    <strong>Tip:</strong> {{ Regtip.hint }}
                    <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div> -->
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <svg @click="back" t="1630722163157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M512.9 137.9C306.4 137.9 139 305.3 139 511.8c0 206.5 167.4 373.9 373.9 373.9s373.9-167.4 373.9-373.9c0.1-206.5-167.4-373.9-373.9-373.9z m86.5 516.6c6.2 6.2 6.2 16.4 0 22.6l-27.2 27.2c-6.2 6.2-16.4 6.2-22.6 0l-154-154-27.2-27.2c-6.2-6.2-6.2-16.4 0-22.6l27.2-27.2 154-154c6.2-6.2 16.4-6.2 22.6 0l27.2 27.2c6.2 6.2 6.2 16.4 0 22.6L456.8 511.8l142.6 142.7z" fill="#e6e6e6" p-id="2685"></path></svg>
                <span class="fw-bold">Go back</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold" style="margin-right:10px;">任务名称:</span>
                <div>
                    <el-input v-model="taskdata.title" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <!-- <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">任务编号:#</span>
            </div> -->
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold" style="margin-right:10px;">任务金额:</span>
                <div>
                    <el-input v-model="taskdata.award" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold" style="margin-right:10px;">发放数量:</span>
                <div>
                    <el-input v-model="taskdata.state" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold" style="margin-right:10px;">任务类型:</span>
                <el-select v-model="leixing.value" placeholder="请选择">
                    <el-option
                    v-for="item in leixing.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
                <!-- <div>
                    <el-input v-model="taskdata.authority" placeholder="请输入内容"></el-input>
                </div> -->
            </div>
            
            <!-- <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">提交者唯一id:</span>
            </div> -->
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold" style="margin-right:10px;">任务内容:</span>
                <div style="width:500px">
                    <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="taskdata.content"></el-input>
                </div>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                <span class="fw-bold">上传图片(选填)</span>
            </div>
            <div class="col-md-8 offset-md-2 d-flex justify-content-start" id="body">
                    <el-form ref="form" :model="form" class="row">
                    <el-form-item label="" class="col-md-6">
                        <input type="file" @change="getImageFile" id="img">
                    </el-form-item>
                    <!-- <el-form-item class="col-md-1">
                        <el-button type="primary" @click="onSubmit">submit</el-button>
                    </el-form-item> -->
                </el-form>
            </div>
            <div @click="onSubmit" class="col-md-8 offset-md-2 d-flex justify-content-center bg-primary text-light" id="body">
                创建
            </div>
        </div>
    </div>
</template>

<script setup>
name:'CreateTask'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import { onMounted,reactive,ref } from "vue";
const Router = useRouter();
const Store = useStore();
const taskdata = reactive({
    title:'',
    award:'',
    content:'',
    authority:'',
    state:'',
});
// 图片数据
const formdata = reactive({
    form: {
        goods_image: '',
        token:'',
        title:'',
        content:'',
        award:'',
    },
});
// 类型容器
const leixing = reactive({
    options: [
        {
        value: '选项1',
        label: '普通',
        },
        {
        value: '选项2',
        label: '新用户',
        },
    ],
    value: '',
})
// 上传图片数据
const getImageFile = (e) => {
    let file = e.target.files[0];
    formdata.form.goods_image = file;
};
// 上传数据
const onSubmit=() =>{
    // console.log(typeof(formdata.form.goods_image));
    // if (formdata.form.goods_image == '')
    // {
    //     Regtip.isshow =true
    //     Regtip.hint ='Please select a screenshot file'
    // }
    // else
    // {
        let x = ''
        if (leixing.value == '选项1')
        {
            x = '普通'
        }
        else
        {
            x = '新用户'
        }
        let formData = new FormData();
        let token = Cookies.get('token')
        formData.append('goods_image', formdata.form.goods_image);
        formData.append('token', Cookies.get('token'));
        formData.append('title', taskdata.title);
        formData.append('content', taskdata.content);
        formData.append('award', taskdata.award);
        formData.append('authority', x);
        formData.append('state', taskdata.state);
        post("/api/v1/createtask/",formData).then((res) => {
            console.log(res.data);
            // 判断权限
            if (res.data.code == 403)
            {
                Router.push('/user')
            }
            else if (res.data.code == 200)
            {
                Router.back();
            }
    });
    // }
};
// 返回
const back = () =>{
    Router.back();
};
// 创建任务
const CreateTask = () =>{
    let data = {token:Cookies.get('token'),title:taskdata.title,award:taskdata.award,content:taskdata.content};
    post("/api/v1/createtask/",data).then((res) => {
        console.log(res.data);
    // 判断权限
    if (res.data.code == 403)
    {
        Router.push('/user')
    }
    else if (res.data.code == 200)
    {
        Router.back();
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