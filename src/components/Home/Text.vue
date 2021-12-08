<template>
    <div>
        <p class="fs-3 fw-bold">The best part-time job in 2021</p>
        <p class="fs-5 fw-bold">The best part-time job in 2021,only need a mobile phone to earn more than $1,000 per day at home!
            We are the largest click farming platform in the country. We have the First-hand resources and the highest percentage of commissions.
        </p>
        <p class="fs-3 fw-bold">Follow us and make more money!</p>
        <button  @click="gotoTask()" style="margin-right:10px" type="button" class="btn btn-dark">Make money</button>
        <button type="button" class="btn btn-dark">Register</button>
    </div>
</template>

<script setup>
name:'Text'
import { useRouter } from "vue-router";
const router = useRouter();
const gotoTask=()=>{
    router.push('task');
}
</script>

<style lang="scss" scoped>

</style>