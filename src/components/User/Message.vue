<template>
    <div class="col-md-12" style="margin-bottom:10px">
        <div id="Messbody">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong class="fs-6 d-flex justify-content-start fw-bold">Notification:&nbsp;&nbsp;&nbsp;{{ props.send.fields.content }}</strong> 
                <button @click="closeReghint" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <!-- <div class="col-md-12 d-flex justify-content-start fw-bold">
                System notification
            </div>
            <div class="col-md-12 fw-bold d-flex justify-content-start">
                &nbsp;&nbsp;&nbsp;{{ props.send.fields.content }}
            </div> -->
        </div>
    </div>
</template>

<script setup>
name:'Message'
// 接收父组件数据
const props = defineProps({
    send: String,
});
</script>

<style lang="scss" scoped>
#Messbody{
    background-color: #ffffff;
    div{
        // padding:5px
    }
}
</style>