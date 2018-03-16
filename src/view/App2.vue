<template>
    <el-tabs :tab-position="tabPosition" class="main" v-model="activeName2">
        <el-tab-pane label="账号管理" name="first">账号管理</el-tab-pane>
        <el-tab-pane label="我的战绩" name="second">我的战绩</el-tab-pane>
        <el-tab-pane label="超神挑战" name="third">超神挑战</el-tab-pane>
        <el-tab-pane label="大神风采" name="fourth">大神风采</el-tab-pane>
    </el-tabs>
</template>
<script>
    export default {
        data() {
            return {
                tabPosition:'bottom',
                activeName2:'first',
            }
        },
        methods: {},
    }
</script>
<style>
    .main{
        margin-top: 0.2rem;
        padding: 0 0.1rem;
        /*margin-left: 0.1rem;*/
    }
</style>