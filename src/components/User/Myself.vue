<template>
<div class="row">
    <div class="col-md-12"> <!--style="height:1000px"-->
        <div id="title" class="col-md-12">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong class="fs-6 d-flex justify-content-start fw-bold">Tip:To view the received tasks, please click on my task</strong> 
                <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
        <!-- <div id="body" class="position-relative rounded-3">
            <div class="position-absolute top-50 start-50 translate-middle">
                <p class="fs-2">Welcome,<slot name="header"></slot></p>
            </div>
        </div> -->
        <div id="info" class="col-md-12">
            <div class="col-md-12 d-flex justify-content-end" style="background-color: #ffffff;padding:10px 10px;">
                <el-dropdown split-button type="primary">
                    <slot name="centerusername"></slot>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item @click="out">quit</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="col-md-12" style="background-color: #ffffff;padding:20px 40px;">
                <div class="col-md-12 fs-4">
                    My purse
                </div>
                <div class="col-md-12 d-flex justify-content-start" style="font-size:100px">
                        <slot name="balance"></slot>
                    <p style="font-size:30px;line-height:200px">USD</p>
                </div>
                <!-- <div class="col-md-12 d-flex justify-content-start" style="font-size:70px">
                    <button @click="postBalance" type="button" class="btn btn-primary">Withdraw</button>
                </div> -->
                <!-- <span class="fs-5">Balance:&nbsp;</span> -->
            </div>
            <!-- <div class="col-md-12">
                <svg t="1630738660492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6305" width="30" height="30"><path d="M158.4 805.6c-59.2 0-108.8-44.8-108.8-99.2v-332.8a104.16 104.16 0 0 1 108.8-99.2h649.6c59.2 0 108.8 44.8 108.8 99.2v198.4a35.68 35.68 0 0 1-36.8 33.6 34.56 34.56 0 0 1-36.8-33.6v-198.4a35.68 35.68 0 0 0-36.8-33.6H156.8a35.52 35.52 0 0 0-36.8 33.6v331.2a35.68 35.68 0 0 0 36.8 33.6h649.6a35.52 35.52 0 0 0 36.8-33.6A35.68 35.68 0 0 1 880 672a34.56 34.56 0 0 1 36.8 33.6 104.16 104.16 0 0 1-108.8 99.2H158.4z" fill="#3F4C92" p-id="6306"></path><path d="M846.4 768a49.28 49.28 0 0 1-20.8-4.8l-216-128a30.24 30.24 0 0 1-9.6-44.8 39.36 39.36 0 0 1 49.6-9.6l216 128a30.24 30.24 0 0 1 9.6 44.8 32 32 0 0 1-28.8 14.4M129.6 768a39.36 39.36 0 0 1-30.4-14.4 30.56 30.56 0 0 1 9.6-44.8l216-128a37.6 37.6 0 0 1 49.6 9.6 30.56 30.56 0 0 1-9.6 44.8l-216 128a42.56 42.56 0 0 1-19.2 4.8" fill="#3F4C92" p-id="6307"></path><path d="M166.4 690.4l336-208-345.6-216-22.4 57.6 6.4 337.6zM940.8 672.8l1.6-356.8-14.4-30.4-313.6 190.4-3.2 11.2 304 185.6z" fill="#748AFF" p-id="6308"></path><path d="M152 696.8l345.6-212.8L552 512l52.8-28.8 326.4 201.6-19.2 23.2-726.4 9.6z" fill="#485AB6" p-id="6309"></path><path d="M931.2 292l-384 214.4-368-222.4 41.6-27.2 662.4-6.4z" fill="#485AB6" p-id="6310"></path><path d="M545.6 560a24.16 24.16 0 0 1-12.64-3.52l-283.2-174.4a24.16 24.16 0 0 1 25.44-41.28l270.56 166.08 244.96-147.52A24.16 24.16 0 0 1 816 400l-257.6 155.2a24.16 24.16 0 0 1-12.8 4.8z" fill="#FFFFFF" p-id="6311"></path><path d="M216 748c-59.2 0-108.8-44.8-108.8-99.2v-331.2a104.16 104.16 0 0 1 108.8-99.2h649.6c59.2 0 108.8 44.8 108.8 99.2v198.4a35.68 35.68 0 0 1-36.8 33.6 34.56 34.56 0 0 1-36.8-33.6v-198.4a35.68 35.68 0 0 0-36.8-33.6H214.4a35.52 35.52 0 0 0-36.8 33.6v331.2a35.68 35.68 0 0 0 36.8 33.6H864a35.52 35.52 0 0 0 36.8-33.6 35.68 35.68 0 0 1 36.8-33.6 34.56 34.56 0 0 1 36.8 33.6 104.16 104.16 0 0 1-108.8 99.2z" fill="#464646" p-id="6312"></path></svg>
                <span class=" fs-5">Email:&nbsp;<slot name="centeremail"></slot></span>
            </div>
            <div class="col-md-12">
                <svg t="1630755420540" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9305" width="30" height="30"><path d="M525.653333 921.6c-37.546667 0-78.506667-6.826667-116.053333-17.066667-215.04-64.853333-341.333333-293.546667-276.48-508.586666 64.853333-215.04 293.546667-341.333333 508.586667-276.48 215.04 64.853333 341.333333 293.546667 276.48 508.586666-10.24 34.133333-27.306667 71.68-47.786667 102.4-10.24 17.066667-30.72 20.48-47.786667 10.24-17.066667-10.24-20.48-30.72-10.24-47.786666 17.066667-27.306667 30.72-54.613333 37.546667-85.333334 54.613333-180.906667-51.2-372.053333-228.693333-423.253333C443.733333 129.706667 252.586667 235.52 197.973333 416.426667 146.773333 593.92 249.173333 785.066667 430.08 839.68c98.986667 30.72 201.386667 13.653333 286.72-44.373333 17.066667-10.24 37.546667-6.826667 47.786667 10.24 10.24 17.066667 6.826667 37.546667-10.24 47.786666-68.266667 44.373333-146.773333 68.266667-228.693334 68.266667z m126.293334-283.306667c13.653333-13.653333 13.653333-34.133333 0-47.786666l-92.16-92.16V307.2c0-20.48-13.653333-34.133333-34.133334-34.133333s-34.133333 13.653333-34.133333 34.133333v218.453333l112.64 112.64c6.826667 6.826667 17.066667 10.24 23.893333 10.24s17.066667-3.413333 23.893334-10.24z" fill="#3E2AD1" p-id="9306"></path></svg>
                <span class="fs-5">Create data:&nbsp;<slot name="centerusercreatedata"></slot></span>
            </div> -->
        </div>
    </div>
</div>
</template>

<script setup>
import { useStore } from "vuex";
import Cookies from 'js-cookie'
import { useRouter } from "vue-router";
name:'Myself'
const Store = useStore();
const Router = useRouter()
const out = () =>{
    Cookies.remove('token');
    Store.commit('changeislogin',true);
    Router.push('/login');
}
</script>

<style lang="scss" scoped>
#body{
    background-color: #42B983;
    height: 150px;
    #title{
        text-align: left;
    }
}
#info{
    // background-color: yellowgreen;
    // height: 200px;
    margin-top: 10px;
    // padding: 10px;
    text-align: start;
    // background-color: #ffffff;
    div{
        margin-bottom: 10px;
        // svg{
        //     margin-right: 10px;
        // }
    }
}

</style>