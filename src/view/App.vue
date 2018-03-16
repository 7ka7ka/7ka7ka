<template>
    <el-tabs v-model="activeName2" class="main">
        <el-tab-pane label=" 爵位数据" name="first">
            <rank-of-nobility></rank-of-nobility>
        </el-tab-pane>
        <el-tab-pane label="拿手英雄" name="second">
            <MainTab2></MainTab2>
        </el-tab-pane>
        <el-tab-pane label="超神战绩" name="third"  class="god-like">
            <tab-god-like></tab-god-like>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="fourth"  class="partner">最佳搭档4</el-tab-pane>
    </el-tabs>
</template>
<script>
    import RankOfNobility from './tab1/RankOfNobility.vue';
    import TabGodLike from './TabGodLike.vue';
    import MainTab2 from './MainTab2.vue'

    export default {
        components: {
            RankOfNobility,
            MainTab2,
            TabGodLike
        },
        data () {
            return{
                activeName2:'first',
            }
        }
    }
</script>
<style>
    .main{
        margin-top: 0.2rem;
        padding: 0 0.1rem;
        /*margin-left: 0.1rem;*/
    }
    .heros-role{
        margin: 0 0.5rem 0.2rem 0.5rem;
    }
    .el-row {
        margin-bottom: 0.1rem;
    }
</style>
<style scoped>

</style>