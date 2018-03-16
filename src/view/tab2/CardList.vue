<template>
    <div>
        <el-row v-for="(item, index) in data" :key="index">
            <el-col :span="24">
                <el-card :body-style="{ padding: '0.1rem' }">
                    <div class="hero-name">
                        <h2>{{item.hero}}</h2>
                        <img v-bind:src="item.hero1" alt="英雄头像">
                    </div>
                    <div class="hero-data">
                        <div class="data-num">
                            <span>使用次数:<i class="data-cs">238</i></span>
                            <span>胜率:<i class="data-sl">59.8%</i></span>
                        </div>
                        <div class="data-statistics">
                            <p class="data-statistics-name">
                                <span class="">协作</span>
                                <span class="">斩将</span>
                                <span class="">破敌</span>
                                <span class="">助攻</span>
                            </p>
                            <p class="data-statistics-num">
                                <span class="">293</span>
                                <span class="">1.2</span>
                                <span class="">69</span>
                                <span class="">35</span>
                            </p>
                        </div>

                    </div>

                    <el-button type="primary" class="data-share">炫耀一下</el-button>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                type: Array
            }
        },
        data() {
            return {}
        },
        methods: {},
    };


</script>
<style>



    .data-share {
        width: 100%;
        margin-top: 0.1rem;
        padding: 0.05rem 0;
    }

    .hero-name,
    .hero-data {
        float: left;
        height: 80px;
    }

    .hero-name {
        width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem 0 0.1rem;
    }

    .hero-name h2 {
        font-size: 16px;
        line-height: 20px;

    }

    .hero-name img {
        width: 1.5rem;
        height: 60px;
        margin: 0 auto;
    }

    .hero-data {
        width: 4rem;
        font-size: 14px;
        line-height: 14px;
    }

    .hero-data .data-num {
        margin-bottom: 14px;
    }

    .hero-data .data-num,
    .hero-data .data-statistics {
        width: 4rem;
        text-align: center;
    }

    .hero-data .data-num span {
        display: inline-block;
        width: 1.9rem;
    }

    .hero-data .data-statistics-name {
        width: 4rem;
        height: 14px;
        border-bottom: 1px solid black;
    }

    .hero-data .data-statistics-name {
        margin-bottom: 8px;
    }

    .hero-data .data-statistics-name span,
    .hero-data .data-statistics-num span {
        display: inline-block;
        width: 0.9rem;
    }

</style>