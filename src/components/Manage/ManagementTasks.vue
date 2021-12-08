<template>
    <div id="ManageTaskbody">
        <div id="body" class="rounded-3 d-flex justify-content-start">
            <div class="col-md-2">
                {{props.send.fields.title}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.taskid}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.authority}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.state}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.state - props.send.fields.state2}}
            </div>
            <div class="col-md-3">
                {{props.send.fields.data}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.award}}$
            </div>
            <div class="col-md-2">
                <el-button @click="deletetask(props.send.fields.taskid)" type="danger" icon="el-icon-delete"></el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'ManagementTasks'
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import {useRouter} from 'vue-router'
const Router = useRouter();
// 接收父组件数据
const props = defineProps({
    send: String,
});
// 删除任务
const deletetask = (taskid) =>{
    let data = {token:Cookies.get('token'),taskid:taskid};
    post("/api/v1/deletetask/",data).then((res) => {
        // 判断权限
        if (res.data.msg == '权限不足')
        {
            Router.back();
        }
        else
        {
            Router.push('/loding')
        }
});
}
</script>

<style lang="scss" scoped>
#ManageTaskbody{
    padding:10px;
    #body{
        background-color: #F8F9FA;
        padding:10px
    }
}
</style>