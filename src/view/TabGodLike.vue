<template>
    <div class="god-like-data">
        <el-row>
            <el-alert
                    type="info"
                    title="超神战绩最多只记录100场。您可以收藏您想保留的战绩，收藏后的战绩不会被替换，您最多可收藏30场战绩。"
                    :closable="false"
                    show-icon>
            </el-alert>
        </el-row>
        <el-row type="flex" justify="center" :gutter="5">
            <el-col :span="12">
                <select-character></select-character>
            </el-col>
            <el-col :span="8">
                <select-time></select-time>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" class="gog-lick-filtrate">筛选</el-button>
            </el-col>
        </el-row>
        <el-row>
            <god-like-data class="tab-god-like-data" :data="chaoshen"></god-like-data>
        </el-row>
    </div>
</template>
<script>
    import SelectCharacter from './SelectCharacter.vue';
    import SelectTime from './SelectTime.vue';
    import GodLikeData from './tab3/GodLikeData.vue';

    export default {
        components: {
            SelectCharacter,
            SelectTime,
            GodLikeData
        },
        data() {
            return {
                chaoshen: [
                    {
                        "userid":"奥丁",
                        "wardbid":"斯特林河",
                        "logtime":"2018-3-14",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg",
                        "warid":"a731401495",
                        "entertype":"爵位赛",
                        "iswin":['斩将王','杀敌王','助攻王','战术大师'],
                        "killhero":"5",
                        "killnpc":"60",
                        "assistcnt":"40",
                        "assistscore":"628",
                    },
                    {
                        "userid":"雷神",
                        "wardbid":"斯特林河",
                        "logtime":"2018-3-14",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg",
                        "warid":"a731401495",
                        "entertype":"军团赛",
                        "iswin":['斩将王','杀敌王','助攻王','战术大师'],
                        "killhero":"5",
                        "killnpc":"60",
                        "assistcnt":"40",
                        "assistscore":"628",
                    }
                ],
            }
        },
        methods: {},
    }
</script>
<style>
    .god-like-data {
        width: 100%;
    }

    .god-like-explain {
        width: 6rem;
        margin: 0 auto 10px;
        text-align: left;
        border-bottom: 1px solid black;
    }

    .god-like-heros {
        width: 2.3rem;
        margin-left: 0.3rem;
    }

    .gog-like-time {
        width: 2.3rem !important;
    }

    .tab-god-like-data {
        margin-top: 10px;
    }
</style>