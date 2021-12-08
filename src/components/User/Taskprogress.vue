<template>
    <div class="col-md-12" style="margin-bottom:10px">
        <div id="body1">
            <div class="col-md-12 d-flex justify-content-start fw-bold">
                <span>{{ props.send.fields.goods_title }}</span>
                &nbsp;&nbsp;&nbsp;<span class="fw-light" style="font-size:13px;color:rgb(121, 121, 121)">Submitted on:{{ x }}</span>
            </div>
            <div class="col-md-12 fw-bold">
                <el-progress
                :text-inside="true"
                :stroke-width="26"
                :percentage="percentage"
                :status='state'
                ></el-progress>
                <!-- {{ props.send.fields.state }} -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";

name:'Taskprogress'
// 接收父组件数据
const props = defineProps({
    send: String,
});
// 对后端响应时间进行处理
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
// 状态容器
const state = ref('Moderated')
const percentage = ref(50)
if (props.send.fields.state == 'Moderated')
{
    state.value = 'Moderated'
}
else if (props.send.fields.state == 'success')
{
    state.value = 'success'
    percentage.value = 100
}
else if (props.send.fields.state == 'fail')
{
    state.value = 'exception'
}
</script>

<style lang="scss" scoped>
#body1{
    background-color: #ffffff;
    div{
        padding:5px
    }
}
</style>