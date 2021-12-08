<template>
    <div>

    </div>
</template>

<script setup>import { onMounted } from "@vue/runtime-core";
import {useRouter} from 'vue-router'
name:'Loding'
const Router = useRouter();
onMounted(()=>{
    Router.back();
})
</script>

<style lang="scss" scoped>

</style>