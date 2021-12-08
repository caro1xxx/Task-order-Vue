<template>
  <div class="container-fluid" style="margin-top:50px;padding:0px;">
    <div class="col-md-8 offset-md-2" style="padding:10px">
        <div id="usertop" class="col-md-12 d-none d-md-block">
        </div>
    <div>
        <div class="col-md-12" id="Userbody">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <div class="col-md-12" v-if="isshow.notfy" v-for="item in notify.data">
                    <Message :send="item"></Message>
                </div>
                <el-tab-pane label="User" name="first" v-if="isshows.isshow">
                    <!-- 具名插槽 -->
                    <Myself>
                        <!-- <template #header>{{ userdata.data.username }}</template> -->
                        <template #centerusername>{{ userdata.data.username }}</template>
                        <template #centeremail>{{ userdata.data.email }}</template>
                        <template #centerusercreatedata>{{ userdata.data.create_time }}</template>
                        <template #balance>{{ userdata.data.balance }}</template>
                    </Myself>
                </el-tab-pane>
                <el-tab-pane label="My task" name="second">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong class="fs-6">Tip: To add more tasks, please go to task</strong>
                            </div>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            &nbsp;&nbsp;
                            <span >Upcoming&nbsp;&nbsp;</span>
                            <span style="height:25px;width:25px;background-color:#318bf3;"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <span>Qualified&nbsp;&nbsp;</span>
                            <span style="height:25px;width:25px;background-color:#4BA84B"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <span>Unqualified&nbsp;&nbsp;</span>
                            <span style="height:25px;width:25px;background-color:#BE1E1E"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <span>Invalidation&nbsp;&nbsp;</span>
                            <span style="height:25px;width:25px;background-color:#a5a5a5"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div v-if="isshow.is" v-for="item in TaskListData.data" class="col-md-4">
                            <Mytask :send="item"></Mytask>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="withdraw" name="third">
                    <div class="row">
                        <div class="col-md-12">
                            <Withdraw>
                                <template #balance style="font-size:100px">{{ balance }}$</template>
                            </Withdraw>
                        </div>
                    </div>
                </el-tab-pane>
                <!-- <el-tab-pane label="schedule" name="fourth">
                    <div class="row">
                        <div v-if="isshow.taskprogress" v-for="item in taskprogress.data" class="col-md-12">
                            <Taskprogress :send="item"></Taskprogress>
                        </div>
                    </div>
                </el-tab-pane> -->
                <!-- <el-tab-pane label="Message" name="fourth">
                    <div class="row">
                        <div class="col-md-12" v-if="isshow.notfy" v-for="item in notify.data">
                            <Message :send="item"></Message>
                        </div>
                    </div>
                </el-tab-pane> -->
            </el-tabs>
        </div>
        <!-- <div id="body" class="col-md-2">
            <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Myself</a>
                <a @click="getUserTaskList" class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">My task</a>
                <a @click="getBalance" class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Withdraw</a>
                <a @click="gettaskprogress" class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Task progress</a>
            </div>
        </div> -->
        </div>
    </div>
</div>
</template>

<script setup>
import Myself from '@/components/User/Myself.vue'
import Mytask from '@/components/User/Mytask.vue'
import Withdraw from '@/components/User/Withdraw.vue'
import Taskprogress from '@/components/User/Taskprogress.vue'
import Message from '@/components/User/Message.vue'
import { reactive,ref,onActivated } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { get, post } from "@/http/api";
import { onMounted } from '@vue/runtime-core';
import Cookies from "js-cookie";
const Router = useRouter();
const Store = useStore();
nama: "User";
const isshow = reactive({
    is:false,
    taskprogress:false,
    notfy:false,
});
const TaskListData = reactive({
    data:{
        fields:{
            title:String,
            taskid:Number,
            state:String,
            award:String,
            date:String,
            ownertoken:String,
        }
    }
})
// 定义标签页数据
const activeName = ref('first');
// 定义标签页方法
const handleClick = (tab, event) =>{
    console.log(tab, event)
}
const isshows = reactive({
    isshow:false
})
const userdata = ({
    data:{
        code: Number,
        msg: String,
        username: String,
        create_time: String,
        email: String,
        balance:String
    }
});
// 任务id存储
const taskidlist = reactive({
    list:''
})
// 定义余额
const balance = ref('0');
// 定义提交任务进度
const taskprogress = reactive({
    data:{
        fields:{
            goods_award:String,
            goods_image:String,
            goods_taskid:Number,
            goods_time:String,
            goods_title:String,
            state:String
        }
    }
})
// 获取用户数据
const getuserdata = (token) =>{
    let data = { token:token};
    post("/api/v1/userdata/", data).then((res) => {
        if (res.data.code == "200") 
        {
            userdata.data = res.data
            isshows.isshow = true
        }
        else
        {
            Router.push('/login')
        }
    });
};
onMounted(()=>{
    if (Cookies.get('token') == undefined)
    {
        Router.push('/login')
    }
    else
    {
        let token = Cookies.get('token')
        console.log(token);
        getuserdata(token);
        getUserTaskList();
        getBalance();
        gettaskprogress();
        getnotifys();
    }
});
// 获取用户任务列表
const getUserTaskList = (token) =>{
    let data = { token:Cookies.get('token')};
    post("/api/v1/usertasklist/", data).then((res) => {
        TaskListData.data = JSON.parse(res.data.data)
        // console.log('1111'+TaskListData.data);
        isshow.is = true
    });
};
// // 获取余额
const getBalance = () =>{
    let data = { token:Cookies.get('token')};
    post("/api/v1/balancedata/", data).then((res) => {
        balance.value = res.data.balance
    });
};
// 获取任务进度列表
const gettaskprogress = () =>{
    let data = { token:Cookies.get('token')};
    post("/api/v1/taskaudit/", data).then((res) => {
        taskprogress.data = JSON.parse(res.data.data)
        console.log(taskprogress.data);
        isshow.taskprogress = true
    });
};
// 消息容器
const notify = reactive({
    data:{
        fields:{
            recipient:String,
            content:String,
        }
    }
})
// 获取通知
const getnotifys = () =>{
    let data = { token:Cookies.get('token')};
    post("/api/v1/notifys/", data).then((res) => {
        notify.data = JSON.parse(res.data.data)
        // console.log(JSON.parse(res.data.data));
        isshow.notfy = true
    });
};
</script>

<style lang="scss" scoped>
#body{
    margin-top:10px;
    border: bottom width 1px;
    border-style:solid;
    border-color:#f0f0f0ab;
    background-color: rgb(255, 255, 255);
    // height: 500px;
    padding: 10px;
}
#usertop{
    background-image: url(../assets/4.jpg);
    height: 230px;
    max-width: 100%;
    background-repeat: no-repeat;
}
#Userbody{
    // padding:10px;
}
</style>
