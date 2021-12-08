<template>
    <div id="TaskReviewbody">
        <div id="body" class="rounded-3 d-flex justify-content-start">
            <div class="col-md-4">
                {{props.send.fields.submitter_token}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.goods_taskid}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.goods_title}}
            </div>
            <div class="col-md-1">
                {{props.send.fields.goods_award}}$
            </div>
            <div class="col-md-2">
                {{ x }}
            </div>
            <div class="col-md-2">
                {{props.send.fields.state}}
            </div>
            <div class="col-md-1">
                <button @click="dealwith(props.send.fields.goods_taskid,props.send.fields.submitter_token)" type="button" class="btn btn-primary btn-sm">处理</button>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'TaskReview'
import { onMounted,watch } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
const Router = useRouter();
const Store = useStore();
// 接收父组件数据
const props = defineProps({
    send: String,
});
let x = ''
    for (var i=0;i<14;i++)
{
    x = x+props.send.fields.goods_time[i]
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
// 跳转详情页面
const dealwith = (taskid,tasktoken) =>{
    Store.commit('TaskReviewId',props.send.fields.goods_taskid,props.send.fields.submitter_token);
    Store.commit('Tasksubmitter_token',props.send.fields.submitter_token);
    Router.push('/dealwith');
};
</script>

<style lang="scss" scoped>
#TaskReviewbody{
    padding:10px;
    #body{
        background-color: #F8F9FA;
        padding:10px
    }
}
</style>