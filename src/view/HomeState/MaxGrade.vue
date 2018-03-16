<template>
    <div class="max-grade-box">
        <el-row>
            <el-col :span="24">
                <h2 class="max-grade-title">最高等级</h2>
            </el-col>
        </el-row>
        <el-row v-for="(item,index) in data" :key="index">
            <div class="max-grade-data">
                <el-col :span="4">
                    <span class="max-grade-lv">{{ item.lv }}</span>
                </el-col>
                <el-col :span="10">
                    <span class="max-grade-name">{{ item.username }}</span>
                </el-col>
                <el-col :span="10">
                    <span class="max-grade-id">id:{{ item.userid }}</span>
                </el-col>
            </div>
        </el-row>
    </div>
</template>
<script>
    export default {
        props:{
            data:{
                type: Array
            }
        },

        data() {
            return {}
        },
        methods: {},
    }
</script>
<style>
    .max-grade-box{
        width:100%;
        height:88px;
        border: 1px solid #E6E6E6;
        color: #808080;
        margin-top: 10px;
    }
    .max-grade-title{
        width:100%;
        height:38px;
        line-height: 38px;
        background: #E8E8E8;
        text-align: center;
        font-weight: normal;
        font-size: 16px;
    }
    .max-grade-data{
        width:100%;
        height:30px;
        padding: 10px 0;
        text-align: center;
    }
    .max-grade-data span{
        display: inline-block;
        height:30px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .max-grade-lv,
    .max-grade-name{


    }
    .max-grade-lv{
        padding: 0 0.3rem;
    }
    .max-grade-name{
        width:1.5rem;
        padding: 0 0.5rem;
        border-left:1px solid #E8E8E8;
        border-right:1px solid #E8E8E8;
    }

</style>