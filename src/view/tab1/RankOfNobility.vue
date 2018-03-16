<template>
    <div>
        <el-row :gutter="20" class="rank-of-nobility-row">
            <el-col :span="6">
                <div class="position-of-the-season">
                    <p>最高段位</p>
                    <p>{{ info1.saiji }}</p>
                </div>
            </el-col>
            <el-col :span="18">
                <table style="border-collapse: collapse">
                    <tr>
                        <th v-for="(val, key) in maxInfo" class="honour-name">{{key}}</th>
                    </tr>
                    <tr>
                        <td v-for="(val, key) in maxInfo" class="honour-key">{{val}}</td>
                    </tr>
                </table>
                <table style="border-collapse: collapse">
                    <tr>
                        <th v-for="(val, key) in avgInfo" class="honour-name">{{key}}</th>
                    </tr>
                    <tr>
                        <td v-for="(val, key) in avgInfo" class="honour-key">{{val}}</td>
                    </tr>
                </table>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="position-of-the-season-img">
                    <img v-bind:src="info1.saijiimg" alt="段位">
                </div>
            </el-col>
            <el-col :span="18">
                <template v-for="(val, name) in info2">
                    <el-col :span="7" class="achievement-name">{{name}}</el-col>
                    <el-col :span="5" class="achievement-val">{{val}}</el-col>
                </template>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" class="rank-of-nobility-flaunt">炫耀一下</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                info1: {
                    "saiji":"S3赛季",
                    "saijiimg":"http://www.8090yxs.com/uploads/allimg/140219/1-140219131332528.png",
                },
                maxInfo:{
                    "最高斩将":"3",
                    "最高破敌":"66",
                    "最高助攻":"55",
                    "最高协作":"255",
                },
                avgInfo: {
                    "平均斩将":"3",
                    "平均破敌":"65",
                    "平均助攻":"56",
                    "平均协作":"2695555555"
                },
                info2: {
                    "胜场":"111",
                    "游戏时间":"90000小时",
                    "斩将王":"111",
                    "首杀":"111",
                    "杀敌王":"111",
                    "三杀":"111",
                    "助攻王":"11",
                    "四杀":"22",
                    "双王":"33",
                    "五杀":"44",
                    "三王":"5",
                    "六杀":"6",
                    "战术大师":"7",
                    "七杀":"8",
                }
            }
        },
        methods: {},
    }
</script>
<style>
    .rank-of-nobility-row{
        margin-bottom: 0.5rem;
    }
    .position-of-the-season{
        width: 1.5rem;
        text-align: center;
        height:1.1rem;
        padding-top: 0.4rem;
        border:1px solid #E8E8E8;
        color: #7F7F7F;
        margin-right: 0.01rem;
    }
    .honour-name{
        width:1.09rem;
        height:0.5rem;
        background: #E8E8E8;
        font-weight: normal;
    }
    .honour-key{
        text-align: center;
        height:0.5rem;
        line-height: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .position-of-the-season-img{
        width:1.5rem;
        height:2rem;
    }
    .position-of-the-season-img img{
        width:100%;
        height:100%;
    }
    .achievement-name{
        background: #E8E8E8;
        text-align: center;
        height:30px;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .achievement-val{
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        height:30px;
        line-height: 30px;
    }
    .rank-of-nobility-flaunt{
        width:100%;
    }

</style>