<template>
    <div id="content" class="col-md-12  position-relative" style="margin-bottom:10px">
        <div class="rounded-3" id="content1" @click="gotobe(props.send.fields.taskid)" :class="{'cg':iscg,'ing':ising,'inv':isinv,'fail':isfail}">
            <div id="content2" class="row">
                <div class="col-md-12">
                    <div class="col-md-12">
                        <p class="fw-bold fs-5" style="color:#fff">{{ props.send.fields.title }}</p>
                    </div>
                </div>
                <div class="col-md-12 fs-6">
                    <span style="color:#fff">Task number：</span>
                    <span style="color:#fff">{{ props.send.fields.taskid }}</span>
                </div>
                <div class="col-md-12">
                    <span style="color:#fff">Remuneration：</span>
                    <span style="color:#fff">{{ props.send.fields.award }}$</span>
                </div>
                <div class="col-md-12">
                    <span style="color:#fff">State：</span>
                    <span style="color:#fff">{{ tips.text }}</span>
                </div>
                <div class="col-md-12">
                    <span style="color:#fff">Deadline：</span>
                    <span style="color:#fff">{{ x }}</span>
                </div>
            </div>
        </div>
        <!-- <span id="goto" class="position-absolute top-50 start-50 translate-middle">
            <svg  v-if="tips.correct" t="1630901857927" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9436" width="60" height="60"><path d="M473.6 561.066667m-345.6 0a345.6 345.6 0 1 0 691.2 0 345.6 345.6 0 1 0-691.2 0Z" fill="#83C5ED" p-id="9437"></path><path d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z" fill="#24AA7D" p-id="9438"></path><path d="M426.666667 746.666667c-6.4 0-10.666667-2.133333-14.933334-6.4-8.533333-8.533333-8.533333-21.333333 0-29.866667l198.4-198.4-198.4-198.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667s21.333333-8.533333 29.866667 0l198.4 198.4c17.066667 17.066667 17.066667 42.666667 0 57.6l-198.4 198.4c-4.266667 6.4-8.533333 8.533333-14.933333 8.533334z" fill="#FCFCFC" p-id="9439"></path></svg>
        </span> -->
    </div>
</template>

<script setup>
import { reactive,onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
name:'Mytask'
const Store = useStore();
const Router = useRouter();
// 接收父组件数据
const props = defineProps({
    send: String,
});
console.log('2222'+props.send.fields);
// 对后端响应时间进行处理
let x = ''
for (var i=0;i<14;i++)
{
    x = x+props.send.fields.date[i]
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
const tips = reactive({
    text:'Upcoming',
});
const iscg = ref(false)
const ising = ref(true)
const isinv = ref(false)
const isfail = ref(false)
const ifstate = () => {
    if (props.send.fields.state == "Upcoming")
    {
        ising.value = true
        iscg.value = false
        isinv.value = false
        isfail.value = false
        tips.text = 'Upcoming'
    }
    else if (props.send.fields.state == "Qualified")
    {
        ising.value = false
        iscg.value = true
        isinv.value = false
        isfail.value = false
        tips.text = 'Qualified'
    }
    else if (props.send.fields.state == "Unqualified")
    {
        ising.value = false
        iscg.value = false
        isinv.value = false
        isfail.value = true
        tips.text = 'Unqualified'
    }
    // 后台传输时间
    let dates = new Date()
    let  yearDate = x.substring(0,4);
    let  monthDate = x.substring(5,7);
    let  dayDate = x.substring(8,10);
    let  hoursDate = x.substring(11,13);
    let  minuteDate = x.substring(14,16);
    // console.log(minuteDate);
    // 判断后端时间和当前时间
    if (parseInt(yearDate) <= dates.getFullYear())
    {
        if (parseInt(yearDate) < dates.getFullYear())
        {
            ising.value = false
            iscg.value = false
            isinv.value = true
            isfail.value = false
            tips.text = 'Invalidation'
        }
        else
        {
            if (parseInt(monthDate)-1 <= dates.getMonth())
            {
                if (parseInt(monthDate)-1 < dates.getMonth())
                {
                    ising.value = false
                    iscg.value = false
                    isinv.value = true
                    isfail.value = false
                    tips.text = 'Invalidation'
                }
                else
                {
                    if (parseInt(dayDate) <= dates.getDate())
                    {
                        if (parseInt(dayDate) < dates.getDate())
                        {
                            ising.value = false
                            iscg.value = false
                            isinv.value = true
                            isfail.value = false
                            tips.text = 'Invalidation'
                        }
                        else
                        {
                            if (parseInt(hoursDate) <= dates.getHours())
                            {
                                if (parseInt(hoursDate) < dates.getHours())
                                {
                                    ising.value = false
                                    iscg.value = false
                                    isinv.value = true
                                    isfail.value = false
                                    tips.text = 'Invalidation'
                                }
                                else
                                {
                                    if (parseInt(minuteDate) <= dates.getMinutes())
                                    {
                                        if (parseInt(minuteDate) < dates.getMinutes())
                                        {
                                            ising.value = false
                                            iscg.value = false
                                            isinv.value = true
                                            isfail.value = false
                                            tips.text = 'Invalidation'
                                        }
                                        // console.log(parseInt(minuteDate));
                                        // console.log(dates.getMinutes())
                                        ising.value = false
                                        iscg.value = false
                                        isinv.value = true
                                        isfail.value = false
                                        tips.text = 'Invalidation'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
onMounted(() =>{
    ifstate()
});
const gotobe = (id) => {
    if (tips.text == 'Upcoming')
    {
        Store.commit('changesubmitid',id)
        Router.push('/submit')
    }
    else
    {
        alert('Task has expired')
    }
};
</script>

<style lang="scss" scoped>
#content{
    // background-color: rgb(255, 255, 255);
    padding: 10px;
    #content1{
        padding: 10px;
        #content2{
            text-align: start;
            p{
                margin:0px
            }
            span{
                font-size: 15px;
            }
        }
    }
}
#goto{
    opacity:1;
    visibility:hidden;
}
// #content:hover{
//     #content1{
//         background-color: #8fcdf1;
//         opacity: 0.6;
//     }
//     #goto{
//         opacity: 1;
//         visibility:visible;
//     }
// };
.cg {
    background-color: rgb(75, 168, 75);
}
.ing{
    background-color: #318bf3;
}
.inv{
    background-color: #a5a5a5;
}
.fail{
    background-color: #be1e1e;
}
</style>