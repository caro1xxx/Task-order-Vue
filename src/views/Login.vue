<template>
    <div id="body4" class="container-fluid">
        <div class="container">
            <div class="row">
                
            </div>
        </div>
    </div>
    <div class="nav_back">

    </div>
    <div id="body" class="col-md-3 offset-md-7 rounded-3">
        <Login></Login>
    </div>
</template>

<script setup>
import Login from "@/components/User/Login.vue"
import Text from "@/components/User/Text.vue"
import { useStore } from "vuex";
import { reactive,watch } from "vue";
name:'Login'


</script>

<style lang="scss" scoped>
#body{
    height:1000px;
    margin-top:160px;
    position:absolute;
    left: 10px;
    right: 10px;
    height:600px;
    line-height: 30px;
    text-align: center;
    word-wrap:break-word;
    word-break:break-all;
    
}
#body4{
    background-image:url(../assets/6.jpg);
    margin-top:50px;
    height: 900px;
    max-width: 100%;
    width:100%;
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
    opacity: 0.7;
}
// 蒙版
.nav_back{
  position: absolute;
  top: 0;
  width: 100%;
  height: 960px;
  background: rgba(0, 0, 0,0.5);
  opacity: 0.9;
}
</style>