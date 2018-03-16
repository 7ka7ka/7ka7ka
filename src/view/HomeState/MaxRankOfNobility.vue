<template>
    <div class="max-rank-box">
        <el-row>
            <el-col :span="24">
                <h2 class="max-rank-title">最高爵位</h2>
            </el-col>
        </el-row>
        <el-row v-for="(item,index) in data" :key="index">
            <div class="max-rank-data">
                <el-col :span="8">
                    <div class="max-rank-img">
                        <img v-bind:src="item.lvimg" alt="爵位图标">
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="max-rank-right">
                        <el-row>
                            <el-col :span="12">
                                <span class="max-rank-name">{{ item.username }}</span>
                            </el-col>
                            <el-col :span="12">
                                <span class="max-rank-id">id:{{ item.userid }}</span>
                            </el-col>
                        </el-row>
                        <el-row type="flex" justify="center">
                            <el-col :span="22">
                                <el-button type="primary" class="max-rank-share">炫耀一下</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </div>
        </el-row>
    </div>
</template>
<script>
    export default {
        props:{
            data:{
                type:Array
            }
        },
        data() {
            return {}
        },
        methods: {},
    }
</script>
<style>
    .max-rank-box{
        width:100%;
        color: #808080;
        text-align: center;
        height:134px;
        border: 1px solid #E6E6E6;
        margin: 10px 0;
    }
    .max-rank-title{
        width:100%;
        height:38px;
        line-height: 38px;
        background: #E8E8E8;
        text-align: center;
        font-weight: normal;
        font-size: 16px;
    }
    .max-rank-data{
        width:100%;
        height:30px;
        padding: 10px 0;
        text-align: center;
    }
    .max-rank-img{
        width:100%;
        height:100%;
    }
    .max-rank-img img{

        width:1.54rem;
        height:1.29rem;
    }
    .max-rank-right span{
        display: inline-block;
        height:30px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .max-rank-name{
        border-left: 1px solid #E8E8E8;
        border-right:1px solid #E8E8E8;
        padding: 0 0.4rem;
    }
    .max-rank-share{
        width:100%;
        height:38px;
        margin-top: 10px;
    }
</style>