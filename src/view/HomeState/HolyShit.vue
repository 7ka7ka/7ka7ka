<template>
    <div class="holy-shit-box">
        <el-row>
            <el-col :span="24">
                <h2 class="holy-shit-title">超神战绩</h2>
            </el-col>
        </el-row>
        <el-row v-for="(items,index) in data" :key="index">
            <el-col :span="24">
                <el-card :body-style="{ padding:'0.1rem' }">
                    <div class="holy-shit-name">
                        <h2 class="username">{{ items.username }}</h2>
                        <p class="battle-map">{{ items.wardbid }}</p>
                        <img v-bind:src="items.hero1" alt="英雄头像">
                    </div>
                    <div class="holy-shit-datum">
                        <div class="data-num">
                            <span class="data-time">{{ items.logtime }}</span>
                            <span class="data-pattern">{{ items.entertype }}</span>
                            <p class="data-id">id：{{ items.userid }}</p>
                        </div>
                        <div class="tab-label">
                            <el-row :gutter="1">
                                <el-col :span="22">
                                    <el-col :span="5.5" v-for="(item,index) in items.iswin" :key="index">
                                        <el-tag type="danger">{{ item }}</el-tag>
                                    </el-col>
                                </el-col>
                                <el-col :span="2">
                                    <i class="el-icon-star-off collect"></i>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="data-statistics">
                            <p class="data-statistics-name">
                                <span class="">斩将:<i>{{ items.killhero }}</i></span>
                                <span class="">破敌:<i>{{ items.killnpc }}</i></span>
                            </p>
                            <p class="data-statistics-name">
                                <span class="">助攻:<i>{{ items.assistcnt }}</i></span>
                                <span class="">协作贡献:<i>{{ items.assistscore }}</i></span>
                            </p>
                        </div>
                    </div>
                </el-card>
            </el-col>
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
    .holy-shit-box{
        width: 100%;
    }
    .holy-shit-title{
        width:100%;
        height:38px;
        line-height: 38px;
        background: #E8E8E8;
        text-align: center;
        font-weight: normal;
        font-size: 16px;
    }
    .holy-shit-name,
    .holy-shit-datum{
        float: left;
    }
    .holy-shit-name{
        width: 30%;
        text-align: center;
    }
    .holy-shit-name p{
        line-height: 20px;
    }
    .holy-shit-name .username{
        font-size: 16px;
    }
    .holy-shit-name .battle-map{
        font-size: 14px;
        margin: 3px 0;
    }
    .holy-shit-name img{
        width:1.5rem;
        height: 60px;
        margin: 0 auto;
    }
    .tab-label{
        font-size: 12px;
    }
    .holy-shit-datum{
        width: 70%;
        font-size: 14px;
        line-height: 14px;
    }
    .holy-shit-datum .data-num{
        margin-bottom: 10px;
    }
    .holy-shit-datum .data-num,
    .holy-shit-datum .data-statistics{
        text-align: center;
    }
    .holy-shit-datum .data-statistics{
        margin-top: 10px;
    }
    .holy-shit-datum .data-num span{
        display: inline-block;
    }
    .holy-shit-datum .data-num .data-time{
        width:2.5rem;
    }
    .holy-shit-datum .data-num .data-pattern{
        width:1.1rem;
    }
    .holy-shit-datum .data-num .data-id{
        width:3rem;
        margin-top: 4px;
    }
    .holy-shit-datum .collect{
        margin-left: 0.1rem;
    }
    .holy-shit-datum .data-statistics-name{
        width:4rem;
        height:14px;
        margin-bottom: 5px;
    }
    .holy-shit-datum .data-statistics-name span,
    .holy-shit-datum .data-statistics-num span{
        display: inline-block;
        width: 1.9rem;
    }
</style>