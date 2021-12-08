<template>
    <div v-show="isshow.isshowLogin">
        <div class="row">
            <div id="body" class="col-md-12 rounded-3">
                <div class="row">
                    <div id="title" class="col-md-12">
                        <span class="fs-1 fw-bold border-5">Login</span>
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Username</span>
                        <el-input placeholder="Please input Username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" v-model="userdata.username" maxlength="14" clearable> </el-input>
                        <!-- <input v-model="userdata.username" type="text" class="form-control" placeholder="Please input Username"> -->
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Password</span>
                        <el-input type="password" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" placeholder="Please input Password" v-model="userdata.password" maxlength="14" clearable> </el-input>
                        <!-- <input type="password" v-model="userdata.password" class="form-control" placeholder="Please input Password"> -->
                    </div>
                    <div id="title" class="col-md-12">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label fs-6" for="exampleCheck1">&nbsp;Remember me</label>
                    </div>
                    <div v-if="tip.isshow" id="title" class="col-md-12">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong class="fs-6">Hint!&nbsp;&nbsp;&nbsp;{{ tip.hint }}</strong> 
                            <button @click="closehint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div id="title" class="col-md-12">
                        <button type="submit" style="width: 100%;" class="btn btn-primary btn-lg" @click="login">Login</button>
                    </div>
                    <div id="forgot" class="col-md-12">
                        <!-- <span>Forgot account?</span> -->
                        <span class="fs-6" @click="gotoRegs">Register an account</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-show="isshow.isshowRegs">
        <div class="row">
            <div id="body" class="col-md-12 rounded-3">
                <div class="row">
                    <div id="title" class="col-md-12">
                        <svg @click="back" t="1630722163157" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2684" width="32" height="32"><path d="M512.9 137.9C306.4 137.9 139 305.3 139 511.8c0 206.5 167.4 373.9 373.9 373.9s373.9-167.4 373.9-373.9c0.1-206.5-167.4-373.9-373.9-373.9z m86.5 516.6c6.2 6.2 6.2 16.4 0 22.6l-27.2 27.2c-6.2 6.2-16.4 6.2-22.6 0l-154-154-27.2-27.2c-6.2-6.2-6.2-16.4 0-22.6l27.2-27.2 154-154c6.2-6.2 16.4-6.2 22.6 0l27.2 27.2c6.2 6.2 6.2 16.4 0 22.6L456.8 511.8l142.6 142.7z" fill="#e6e6e6" p-id="2685"></path></svg>
                        <span class="fw-bold fs-5">&nbsp;go back</span>
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-1 fw-bold border-5">Register</span>
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Username</span>
                        <el-input placeholder="Please input Username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" v-model="Userdata.username" maxlength="14" clearable> </el-input>
                        <!-- <input v-model="Userdata.username" type="text" class="form-control" placeholder="Please input username"> -->
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Password</span>
                        <el-input type="password" placeholder="Please input Username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" v-model="Userdata.password" maxlength="14" clearable> </el-input>
                        <!-- <input v-model="Userdata.password" type="password" class="form-control" placeholder="Please input password"> -->
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Repeat password</span>
                        <el-input type="password" placeholder="Please input Username" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" v-model="Userdata.repassword" maxlength="14" clearable> </el-input>
                        <!-- <input v-model="Userdata.repassword" type="password" class="form-control" placeholder="Please input password"> -->
                    </div>
                    <div id="title" class="col-md-12">
                        <span class="fs-4">&nbsp;Email</span>
                        <input v-model="Userdata.email" type="text" class="form-control" placeholder="Please input emial">
                    </div>
                    <!-- <div id="title" class="col-md-12">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');" placeholder="Please enter the email verification code" v-model="Userdata.code" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button :class="{ disabled: isdisabled }" itemid="fs" class="btn btn-outline-secondary" type="button" id="button-addon2" @click="SendCode">Send </button>
                        </div>
                    </div> -->
                    <div id="title" class="col-md-12">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label" for="exampleCheck1">&nbsp;Remember me</label>
                    </div>
                    <div v-if="Regtip.isshow" id="title" class="col-md-12">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong class="fs-6">Hint!&nbsp;&nbsp;&nbsp;{{ Regtip.hint }}</strong> 
                            <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div id="title" class="col-md-12">
                        <button type="submit" style="width: 100%;" class="btn btn-primary btn-lg" @click="ver">Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'Login'
import { reactive,ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { get, post } from "@/http/api";
import Cookies from "js-cookie";
const Store = useStore();
const Router = useRouter();
const isshow = reactive({
    isshowRegs:false,
    isshowLogin:true,
});
const isdisabled = ref(false);
// 注册数据
const Userdata = reactive({
    username:'',
    password:'',
    repassword:'',
    email:'',
    code:'',
})
// 前往注册页面
const gotoRegs =() =>{
    isshow.isshowRegs = true;
    isshow.isshowLogin = false;
};
// 登录提示数据
const tip = reactive({
    isshow:false,
    hint:'',
});
// 注册提示数据
const Regtip = reactive({
    isshow:false,
    hint:'',
});
// 用户数据
const userdata = reactive({
    username:'',
    password:'',
})
// 返回登录页面
const back = ()=>{
    isshow.isshowRegs = false;
    isshow.isshowLogin = true;
};
// 登录请求
const login = () =>{
    let data = { username: userdata.username, password: userdata.password };
    post("/api/v1/auth/", data).then((res) => {
        console.log(res);
        if (res.data.code == "200") 
        {
            Cookies.set("token",res.data.token, { expires: 7 });
            Store.commit('changeislogin',false);
            Router.push('/user')
            // Router.go(0)
        }
        else
        {
            tip.isshow = true;
            tip.hint = res.data.msg;
        }
    });
};
// 关闭登录提示
const closehint = () =>{
    tip.isshow = false;
};
// 关闭注册提示
const closeReghint = () =>{
    Regtip.isshow = false;
};
// 发送验证码
const SendCode = () =>{
    let data = {'email':Userdata.email };
    isdisabled.value = true;
    Regtip.isshow = true;
    Regtip.hint = 'Sending verification code...';
    post("/api/v1/fs/", data).then((res) => {
        if (res.data.code == "200") 
        {
            Regtip.hint = 'Sent successfully';
            isdisabled.value = false;
        }
        else if (res.data.code == "403")
        {
            Regtip.hint = 'Failed to send';
            isdisabled.value = false;
        }
        else
        {
            Regtip.hint = 'Timeout!';
            isdisabled.value = false;
        }
    });
};
// 注册请求
const Regs = () =>{
let data = {username:Userdata.username,password:Userdata.password,email:Userdata.email,code:Userdata.code}
post("/api/v1/yz/", data).then((res) => {
    console.log(res.data);
    if (res.data.code != "200") 
    {
        Regtip.isshow = true;
        Regtip.hint = res.data.msg;
    }
    else
    {
        Cookies.set("token",res.data.token, { expires: 7 });
        Store.commit('changeislogin',false);
        Regtip.hint = 'Sent successfully';
        Router.push('/user');
    }
});
};
// 字段验证
const ver = () =>{
    if (Userdata.username == '')
    {
        Regtip.isshow = true;
        Regtip.hint = 'please enter user name';
    }
    else if (Userdata.password == '')
    {
        Regtip.isshow = true;
        Regtip.hint = 'please enter password';
    }
    else if (Userdata.password != Userdata.repassword)
    {
        Regtip.isshow = true;
        Regtip.hint = 'The two passwords are inconsistent';
    }
    else
    {
        Regs();
    }
}

</script>

<style lang="scss" scoped>
#body{
    background-color: #ffffff;
    padding: 10px;
    #title{
        text-align: start;
        margin-bottom: 10px;
    }
    #forgot{
        text-align: center;
        font-size: 13px;
        color: #0D6EFD;
        :hover{
            color:#5581c4;
        }
        span{
            margin-right:20px;
        }
    }
}
</style>