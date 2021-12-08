<template>
  <div class="container" style="margin-top:70px">
    <div class="col-md-10 offset-md-1">
      <div class="row">
        <!-- <div id="top" class="col-md-12 d-flex justify-content-end">
          <div class="rounded-3">
            <svg @click="gotoinfo" t="1631016431887" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11495" width="30" height="30"><path d="M889.828994 749.637494c-1.204099-1.548127-119.205779-166.165631-119.205779-287.435579 0-168.401814-76.202251-254.752898-162.725349-286.919536L607.897867 159.973123c0-52.980346-43.175542-95.983874-95.983874-95.983874S415.930119 107.164791 415.930119 159.973123l0 16.685369c-10.836889 7.912649-16.169326 21.845792-11.868974 35.262893 5.332437 16.857383 23.393919 25.974131 40.251302 20.641693 17.717453-5.676466 36.983034-8.428691 56.936671-8.428691l21.32975 0c115.249454 0 184.055098 89.103309 184.055098 238.239543 0 108.024861 72.933983 235.315303 110.261045 293.456073-57.452713 26.146145-183.023014 76.202251-304.809004 76.202251-121.441962 0-247.356291-50.400134-304.809004-76.546279 37.327062-57.968755 110.089031-184.915169 110.089031-293.112044 0-62.441122 11.524945-114.217369 34.574836-153.952629 8.77272-15.309256 3.612296-34.918864-11.69696-43.691584-15.48127-8.944734-34.918864-3.612296-43.691584 11.69696-28.554342 49.540064-43.175542 112.1532-43.175542 185.947253 0 121.269948-118.00168 285.199395-119.205779 286.919536-5.332437 7.568621-7.396607 16.857383-5.332437 25.974131 2.064169 8.944734 7.912649 16.685369 15.997312 20.985721 5.676466 3.096254 107.336805 57.280699 233.423148 84.458928 21.32975 66.397447 73.966068 111.29313 133.654964 111.29313s112.325214-44.895683 133.654964-111.29313c126.086343-27.178229 227.746682-81.018646 233.423148-83.942886 8.084663-4.472367 13.933143-12.040988 16.169326-20.985721C897.225601 766.666891 895.333445 757.206115 889.828994 749.637494zM501.249118 159.973123c-7.224593 0-14.277171 1.032085-21.32975 1.548127L479.919368 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625 17.545439 0 31.994625 14.449185 31.994625 31.994625l0 0.860071c-7.224593-0.516042-14.277171-0.860071-21.32975-0.860071L501.249118 159.973123zM511.913993 928.016126c-22.361834 0-43.175542-13.417101-57.968755-35.262893 19.26558 2.064169 38.531161 3.268268 57.968755 3.268268s38.875189-1.376113 57.968755-3.268268C555.089535 914.599026 534.275827 928.016126 511.913993 928.016126z" p-id="11496" fill="#0070BA"></path></svg>
          </div>
          <div class="rounded-3">
            <svg @click="RefreshTask" t="1631016113222" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10588" width="30" height="30"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m205.653333-210.090667A298.666667 298.666667 0 0 0 385.365333 241.408l41.6 74.88A213.333333 213.333333 0 0 1 725.333333 512h-91.733333a21.333333 21.333333 0 0 0-18.645333 31.701333l102.698666 184.874667z m-120.618666-20.864A213.333333 213.333333 0 0 1 298.666667 512h91.733333a21.333333 21.333333 0 0 0 18.645333-31.701333L306.346667 295.424a298.666667 298.666667 0 0 0 332.288 487.168l-41.6-74.88z" fill="#0070BA" p-id="10589"></path></svg>
          </div>
        </div> -->
        <div class="col-md-12" v-if="isshow.is" v-for="item in tasklist.tasklistdata">
            <Task_component :send="item.fields" :pk="item.pk"></Task_component>
        </div>
      </div>
    </div>
    <div v-if="Refreshdata.isshowLoding" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
import Task_component from "@/components/Task/Task_component.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { get, post } from "@/http/api";
import Cookies from "js-cookie";
import { onMounted,reactive } from "vue";
const Router = useRouter();
name:'Task'
const isshow = reactive({
  is:false
})
const tasklist = reactive({
  tasklistdata:{
            model:'', 
            pk: Number, 
            fields: 
            {
              title: '', 
              data:  '', 
              content:  '',
              state: Boolean, 
              award:  '',
              id:Number,
              goods_image:'',
            }
    }
});
const xxx =  reactive({
  tasklistdata:{
    name:'1',
    age:123
  }
});
// 定义刷新数据
const Refreshdata = reactive({
  isshowLoding:true
})
// 获取任务数据
const getTaskList= () => {
  post("/api/v1/tasklist/").then((res) => {
    //JSON.parse把字符串转为json对象，\自动消失
    tasklist.tasklistdata = JSON.parse(res.data.data)
    console.log(JSON.parse(res.data.data))
    Refreshdata.isshowLoding = false
    isshow.is = true
    // console.log(tasklist.tasklistdata);
});
};
//钩子函数自动触发获取任务列表
onMounted(()=>{
  getTaskList()
});
// 刷新任务
const RefreshTask = () =>{
  Refreshdata.isshowLoding = true
  isshow.is = false
  // setInterval(()=>{
  //   Refreshdata.isshowLoding = false
  //   isshow.is = true
  // },1000)
  getTaskList()
};
// 前往通知页面
const gotoinfo = () =>{
    Router.push('/user');
}
</script>

<style lang="scss" scoped>
#top{
  margin-top:10px;
  div{
    background-color: white;
    border: width 1px;
    border-style:solid;
    border-color:#f0f0f0ab;
    margin-right: 8px;
  }
}
</style>