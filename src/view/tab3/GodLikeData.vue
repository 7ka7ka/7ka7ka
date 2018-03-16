<template>
    <div class="god-like-box">
        <el-row v-for="(items,index) in data" :key="index">
            <el-col :span="24">
                <el-card :body-style="{ padding:'0.1rem' }">
                    <div class="god-like-name">
                        <h2 class="username">{{ items.userid }}</h2>
                        <p class="battle-map">{{ items.wardbid }}</p>
                        <img v-bind:src="items.hero1" alt="英雄头像">
                    </div>
                    <div class="god-like-datum">
                        <div class="data-num">
                            <span class="data-time">{{ items.logtime }}</span>
                            <span class="data-pattern">{{ items.entertype }}</span>
                            <p class="data-id">id：{{ items.warid }}</p>
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
    .god-like-box{
        width: 100%;
    }
    /*.god-like-once{*/
        /*width:6rem;*/
        /*height:110px;*/
        /*margin: 0 auto;*/
        /*padding: 5px 0;*/
    /*}*/
    .god-like-name,
    .god-like-datum{
        float: left;
        /*height:100px;*/
    }
    .god-like-name{
        width: 30%;
        text-align: center;
        /*margin: 0 0.2rem 0 0.1rem;*/
    }
    .god-like-name p{
        line-height: 20px;
    }
    .god-like-name .username{
        font-size: 16px;
    }
    .god-like-name .battle-map{
        font-size: 14px;
        margin: 3px 0;
    }
    .god-like-name img{
        width:1.5rem;
        height: 60px;
        margin: 0 auto;
    }
    .tab-label{
        font-size: 12px;
    }
    .god-like-datum{
        width: 70%;
        font-size: 14px;
        line-height: 14px;
    }
    .god-like-datum .data-num{
        margin-bottom: 10px;
    }
    .god-like-datum .data-num,
    .god-like-datum .data-statistics{
        /*width:4rem;*/
        text-align: center;
    }
    .god-like-datum .data-statistics{
        margin-top: 10px;
    }
    .god-like-datum .data-num span{
        display: inline-block;
    }
    .god-like-datum .data-num .data-time{
        width:2.5rem;
    }
    .god-like-datum .data-num .data-pattern{
        width:1.1rem;
    }
    .god-like-datum .data-num .data-id{
        width:3rem;
        margin-top: 4px;
    }
    .god-like-datum .collect{
        margin-left: 0.1rem;
    }
    .god-like-datum .data-statistics-name{
        width:4rem;
        height:14px;
        margin-bottom: 5px;
    }
    .god-like-datum .data-statistics-name span,
    .god-like-datum .data-statistics-num span{
        display: inline-block;
        width: 1.9rem;
    }
</style>