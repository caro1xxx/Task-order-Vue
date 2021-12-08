<template>
    <div id="UserManagebody">
        <div id="body" class="rounded-3 d-flex justify-content-start">
            <div class="col-md-1">
                {{props.send.fields.username}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.balance}}$
            </div>
            <div class="col-md-1">
                {{props.send.fields.create_time}}
            </div>
            <div class="col-md-2">
                {{props.send.fields.email}}
            </div>
            <div class="col-md-4">
                {{props.send.fields.token}}
            </div>
            <div class="col-md-2">
                <el-dropdown size="medium" split-button type="primary">
                    {{props.send.fields.authority}}
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item @click="changeUserauthority('普通')">普通</el-dropdown-item>
                        <el-dropdown-item @click="changeUserauthority('封禁')">封禁</el-dropdown-item>
                        <el-dropdown-item @click="changeUserauthority('管理员')">管理员</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="col-md-1">
                <el-button @click="deleteuser" type="danger" icon="el-icon-delete"></el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'UserManage'
import {reactive} from 'vue'
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
import {useRouter} from 'vue-router'
// 接收父组件数据
const props = defineProps({
    send: String,
});
const Router = useRouter();
// 定义当前记录token
const UserToken = reactive({
    data:{
        token:'',
    }
})
// 修改用户权限
const changeUserauthority = (authority) =>{
    UserToken.data.token = props.send.fields.token
    let data = {token:Cookies.get('token'),Usertoken:UserToken.data.token,authority:authority};
    post("/api/v1/changeauthority/",data).then((res) => {
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
};
// 删除用户
const deleteuser = () =>{
    UserToken.data.token = props.send.fields.token
    let data = {token:Cookies.get('token'),Usertoken:UserToken.data.token};
    post("/api/v1/deleteuser/",data).then((res) => {
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
};
</script>

<style lang="scss" scoped>
#UserManagebody{
    padding:10px;
    #body{
        background-color: #F8F9FA;
        padding:10px
    }
}
</style>