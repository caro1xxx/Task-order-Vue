<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#" style="font-size:30px">Ropeasy</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-size:20px;">
            <li class="nav-item" @click="gotoabc">
              <router-link class="nav-link" to="/">home</router-link>
            </li>
            <li v-if="ShowTask" class="nav-item" @click="gotoabc">
              <router-link class="nav-link" to="/task">Position</router-link>
            </li>
            <li class="nav-item" @click="gotoabc">
              <router-link class="nav-link" to="/user">User</router-link>
            </li>
            <li class="nav-item d-none d-lg-block" @click="gotoabc" v-if="ismanagedata">
              <router-link class="nav-link" to="/manage">Manage</router-link>
            </li>
          </ul>
          <form v-if="isshow" class="d-flex d-flex justify-content-center">
            <div @click="ifpage" id="login" class="rounded-pill d-flex justify-content-center text-light fs-5">
              <p>Login</p>
            </div>
            <div @click="ifpage" id="login2" class="rounded-pill d-flex justify-content-center fs-5">
              <p>Register</p>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { get, post } from "@/http/api";
import Cookies from "js-cookie";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const Store = useStore();
const Router = useRouter();
const isshow = ref(true)
const ismanagedata = ref(false)
// 判断是否cookie然后页面
const ifpage = ()=>{
  if (document.body.clientWidth <= 600)
  {
    document.getElementById('navbarSupportedContent').className +='show';
    Router.push('/login')
  }
  else
  {
    Router.push('/login')
  }
};
const islogin = () =>{
  if (Cookies.get('token') != undefined)
  {
    isshow.value = false;
  }
  else
  {
    isshow.value = true;
  }
};
// 判断是否登录 然后显示导航task
const ShowTask = ref(false);
const isLogin = () => {
  if (Cookies.get('token') != undefined)
    {
        ShowTask.value = true;
    }
    else
    {
        ShowTask.value = false;
    }
};
// 进入页面每隔0.5秒判断一次是否登录
onMounted(()=>{
  setInterval(()=>{
    isLogin();
  },500)
})
watch(() => Store.state.islogin,(val, old) => {isshow.value = val;;});
// 获取权限
const getManage = () => {
  let data = { token: Cookies.get('token')};
  post("/api/v1/getmanage/", data).then((res) => {
      console.log(res);
      if (res.data.code == "200") 
      {
          ismanagedata.value = true
      }
      else
      {
          ismanagedata.value = false
      }
  });
}
onMounted(()=>{
  islogin();
  getManage();
});
// 导航栏收回
const gotoabc = () =>{
  if (document.body.clientWidth <= 600)
  {
    console.log(222222222);
    document.getElementById('navbarSupportedContent').className +='show';
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'MyriadPro-Regular';
    src: url('./assets/MyriadPro-Regular.svg');
    src: url('./assets/MyriadPro-Regular.otf?#iefix') format('embedded-opentype'),
         url('./assets/MyriadPro-Regular.svg') format('woff'),
         url('./assets/MyriadPro-Regular.svg') format('truetype'),
         url('./assets/MyriadPro-Regular.svg#webfont34M5alKg') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MyriadPro-Light';
    src: url('./assets/MyriadPro-Light.svg');
    src: url('./assets/MyriadPro-Light.ttf?#iefix') format('embedded-opentype'),
         url('./assets/MyriadPro-Light.svg') format('woff'),
         url('./assets/MyriadPro-Light.svg') format('truetype'),
         url('./assets/MyriadPro-Light.svg#webfont34M5alKg') format('svg');
    font-weight: normal;
    font-style: normal;
}
#app {
  // font-family: 'Helvetica Neue',Helvetica,Arial,Sans-Serif;
  // font-family: 'MyriadPro-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0070BA;
}

#nav {
  // padding: 30px;
  border: bottom width 1px;
  border-bottom-style:solid;
  border-bottom-color:#f0f0f0ab;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0070BA;
    }
  }
}
#login{
  height: 40px;
  width: 100px;
  background-color: #0070BA;
  margin-right: 10px;
  p{
    line-height: 40px;;
  }
}
#login2{
  height: 40px;
  width: 100px;
  background-color: #ffffff;
  margin-right: 10px;
  border: bottom width 1px;
  border-style:solid;
  border-color:#0070BA;
  p{
    line-height: 35px;;
    color:#0070BA
  }
}
#login:hover{
  background-color: #ffffff;
  p{
    color:#0070BA
  }
}
#login2:hover{
  background-color: #0070BA;
  p{
    color:#ffffff
  }
}
</style>
