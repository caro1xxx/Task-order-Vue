<template>
    <div id="WithReviewbody">
        <div id="body" class="rounded-3 d-flex justify-content-start">
            <div class="col-md-2" style="text-decoration:underline" @click="tanchuangdata(props.send.fields.name,props.send.fields.routingnumber,props.send.fields.receiveaccount,props.send.fields.way,props.send.fields.zellename,props.send.fields.zelleemail)">
                详细信息
            </div>
            <!-- <div class="col-md-2">
                {{props.send.fields.name}}
            </div>
            <div class="col-md-2">
                {{props.send.fields.routingnumber}}
            </div> -->
            <div class="col-md-1">
                {{props.send.fields.accountbalance}}$
            </div>
            <div class="col-md-1">
                {{props.send.fields.withdrawalamount}}$
            </div>
            <div class="col-md-1">
                {{props.send.fields.way}}
            </div>
            <div class="col-md-2">
                {{ x }}
            </div>
            <div class="col-md-4">
                {{props.send.fields.submitter_token}}
            </div>
            <div class="col-md-1">
                <button @click="postWithdeal(props.send.fields.submitter_token,props.send.fields.withdrawalamount)" type="button" class="btn btn-primary btn-sm">完成</button>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'WithdrawalReview'
import {useRouter} from 'vue-router'
import Cookies from "js-cookie";
import { get, post } from "@/http/api";
const Router = useRouter();
// 接收父组件数据
const props = defineProps({
    send: String,
});
let x = ''
for (var i=0;i<14;i++)
{
    x = x+props.send.fields.time[i]
    if (i == 3)
    {
        x = x+'-'
    }
    else if (i == 5)
    {
        x = x+'-'
    }
    else if (i == 7)
    {
        x = x+' '
    }
    else if (i == 9)
    {
        x = x+':'
    }
    else if (i == 11)
    {
        x = x+':'
    }
};
// 处理提现
const postWithdeal = (Usertoken,amount) =>{
    let data = {token:Cookies.get('token'),Usertoken:Usertoken,amount:amount};
    post("/api/v1/withdrawsuccessfully/",data).then((res) => {
        console.log(res.data)
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
const tanchuangdata = (a,b,c,way,d,e) => {
    if (way == 'ACH')
    {
        alert(`收款方式:${way}\nACH Name:${a}\nACH Routing:${b}\n汇款账号:${c}`)
    }
    else if (way == 'zelle')
    {
        alert(`收款方式:${way}\nzelle Name:${d}\nzelle email:${e}`)
    }
    else
    {
        alert(`收款方式:${way}\n收款账户:${c}`)
    }
}
</script>

<style lang="scss" scoped>
#WithReviewbody{
    padding:10px;
    #body{
        background-color: #F8F9FA;
        padding:10px
    }
}
</style>