<template>
    <div class="container" style="margin-top:70px">
        <div v-if="pcshow" class="col-md-12">
            请使用PC访问
        </div>
        <div id="body1" class="col-md-12 d-none d-md-block">
            <el-tabs v-if="isshow.is" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="任务审核" name="first">
                    <div class="row">
                        <div id="ManageTaskbody">
                            <div id="body" class="rounded-3 d-flex justify-content-start">
                                <div class="col-md-4">
                                    提交者token
                                </div>
                                <div class="col-md-1">
                                    任务id
                                </div>
                                <div class="col-md-1">
                                    任务名称
                                </div>
                                <div class="col-md-1">
                                    任务金额
                                </div>
                                <div class="col-md-2">
                                    提交时间
                                </div>
                                <div class="col-md-2">
                                    审核状态
                                </div>
                            </div>
                        </div>
                        <div v-if="show.isshowTask" class="col-md-12" v-for="item in taskreviewdata.data">
                            <TaskReview :send="item"></TaskReview>
                        </div>
                        <div v-if="show.isshowMore" class="col-md-12">
                            <p class="text-primary">没有更多了</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="用户管理" name="second">
                    <div class="row">
                        <div id="UserManagebody">
                            <div id="body" class="rounded-3 d-flex justify-content-start">
                                <div class="col-md-1">
                                    用户名
                                </div>
                                <div class="col-md-1">
                                    余额
                                </div>
                                <div class="col-md-1">
                                    注册时间
                                </div>
                                <div class="col-md-2">
                                    邮箱
                                </div>
                                <div class="col-md-4">
                                    token
                                </div>
                                <div class="col-md-2">
                                    权限
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" v-for="items in UserManagedata.data">
                            <UserManage :send="items"></UserManage>
                        </div>
                        <div class="col-md-12">
                            <p class="text-primary">没有更多了</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="提现审核" name="third">
                    <div class="row">
                        <div id="WithReviewbody">
                            <div id="body" class="rounded-3 d-flex justify-content-start">
                                <div class="col-md-2">
                                    转账账户
                                </div>
                                <div class="col-md-1">
                                    用户余额
                                </div>
                                <div class="col-md-1">
                                    提现金额
                                </div>
                                <div class="col-md-1">
                                    方式
                                </div>
                                <div class="col-md-2">
                                    申请时间
                                </div>
                                <div class="col-md-4">
                                    token
                                </div>
                            </div>
                        </div>
                        <div v-if="show.isshowWithdra" class="col-md-12" v-for="items in UserWithdarwdata.data">
                            <WithdrawalReview :send="items"></WithdrawalReview>
                        </div>
                        <div v-if="show.isshowWithdraMore" class="col-md-12">
                            <p class="text-primary">没有更多了</p>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="管理任务" name="fourth">
                    <div class="row">
                        <span @click="gotoCreate">创建任务</span>
                        <div id="ManageTaskbody">
                            <div id="body" class="rounded-3 d-flex justify-content-start">
                                <div class="col-md-2">
                                    任务名称
                                </div>
                                <div class="col-md-1">
                                    任务id
                                </div>
                                <div class="col-md-1">
                                    权限
                                </div>
                                <div class="col-md-1">
                                    发放数量
                                </div>
                                <div class="col-md-1">
                                    剩余数量
                                </div>
                                <div class="col-md-3">
                                    创建时间
                                </div>
                                <div class="col-md-1">
                                    金额
                                </div>
                            </div>
                        </div>
                        <div v-if="show.isshowManage" class="col-md-12" v-for="item in ManageTaskData.data">
                            <ManagementTasks :send="item"></ManagementTasks>
                        </div>
                        <div v-if="show.isshowManageMore" class="col-md-12">
                            <p class="text-primary">没有更多了</p>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div v-if="isshow.isloding" class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script setup>
name:'Manage'
import {onMounted, ref,reactive} from 'vue'
import UserManage from '@/components/Manage/UserManage.vue'
import TaskReview from '@/components/Manage/TaskReview.vue'
import WithdrawalReview from '@/components/Manage/WithdrawalReview.vue'
import ManagementTasks from '@/components/Manage/ManagementTasks.vue'
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import {useRouter} from 'vue-router'
const Router = useRouter();
const pcshow = ref(true)
const activeName = ref('first');
// 定义所有显示容器
const show = reactive({
    isshowMore:true,
    isshowTask:false,
    isshowWithdraMore:true,
    isshowWithdra:false,
    isshowManageMore:true,
    isshowManage:false,
})
// 定义任务审核数据容器
const taskreviewdata = reactive({
    data:{
        fields:{
        goods_award:String,
        goods_image:String,
        goods_taskid:Number,
        goods_time:String,
        goods_title:String,
        state:String,
        submitter_token:String,
        }
    }
});
// 用户列表容器
const UserManagedata = reactive({
    data:{
        fields:{
        authority:String,
        balance:String,
        create_time:Number,
        email:String,
        token:String,
        username:String,
        }
    }
});
// 用户提现容器
const UserWithdarwdata = reactive({
    data:{
        fields:{
        accountbalance:String,
        receiveaccount:String,
        state:Number,
        submitter_token:String,
        time:String,
        way:String,
        withdrawalamount:String,
        }
    }
});
const isshow = reactive({
    is:false,
    isloding:true,
})
const handleClick = (tab, event) =>{
    console.log(tab, event)
};
// 请求任务审核数据
const getTaskReview = () =>{
    // let token = Cookies.get('token');
    let data = {token:Cookies.get('token')};
    post("/api/v1/taskreview/",data).then((res) => {
        // 判断权限
        if (res.data.code == 403)
        {
            Router.back();
        }
        else if (res.data.code == 405)
        {
            show.isshowMore = true;
            show.isshowTask= false;
        }
        else if (res.data.code == 200)
        {
            taskreviewdata.data = JSON.parse(res.data.data)
            show.isshowMore = false;
            show.isshowTask= true;
        }
});
};
onMounted(()=>{
    if (document.body.clientWidth >1024)
    {
        pcshow.value =false
    }
    getTaskReview();
    getUserManage();
    getwithdrawData();
    getManagementTasks();
    setTimeout(()=>{
        isshow.is = true;
        isshow.isloding =false;
    },3000)
});
// 请求用户管理数据数据
const getUserManage = () =>{
    let data = {token:Cookies.get('token')};
    post("/api/v1/userManage/",data).then((res) => {
        console.log(JSON.parse(res.data.data));
        // 判断权限
        if (res.data.msg == '权限不足')
        {
            Router.back();
        }
        else
        {
            UserManagedata.data = JSON.parse(res.data.data)
        }
});
};
// 请求提现数据
const getwithdrawData = () =>{
let data = {token:Cookies.get('token')};
post("/api/v1/withdraw/",data).then((res) => {
    console.log(res.data.code);
    // 判断权限
    if (res.data.code == 403)
    {
        Router.push('/user')
    }
    else if (res.data.code == 404)
    {
        show.isshowWithdraMore = true;
        show.isshowWithdra= false;
    }
    else if (res.data.code == 200)
    {
        UserWithdarwdata.data = JSON.parse(res.data.data)
        show.isshowWithdraMore = false;
        show.isshowWithdra= true;
    }
});
};
// 任务管理容器
const ManageTaskData = reactive({
    data:{
        fields:{
            award:String,
            content:String,
            data:Number,
            state:Boolean,
            taskid:Number,
            title:String,
        }
    }
})
// 任务管理
const getManagementTasks = () =>{
let data = {token:Cookies.get('token')};
post("/api/v1/managementtasks/",data).then((res) => {
    // 判断权限
    if (res.data.code == 403)
    {
        Router.push('/user')
    }
    else if (res.data.code == 200)
    {
        ManageTaskData.data = JSON.parse(res.data.data)
        show.isshowManageMore = false;
        show.isshowManage= true;
    }
});
};
// 前往创建任务
const gotoCreate = () => {
    Router.push('/createtask');
}
</script>

<style lang="scss" scoped>
#body1{
    padding: 10px;
    border: width 1px;
    border-style:solid;
    border-color:#f0f0f0ab;
    background-color: rgb(255, 255, 255);
}

</style>