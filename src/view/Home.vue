<template>
    <div class="home-main">
        <el-row>
            <el-col>
                <el-alert title="将军，您的荣耀在此" center type="success" :closable="false"></el-alert>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <max-grade :data="maxgrade"></max-grade>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <max-rank-of-nobility :data="maxgrade"></max-rank-of-nobility>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <holy-shit :data="maxgrade"></holy-shit>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import MaxGrade from "./HomeState/MaxGrade.vue";
    import MaxRankOfNobility from "./HomeState/MaxRankOfNobility.vue";
    import HolyShit from "./HomeState/HolyShit.vue";

    export default {
        components:{
            MaxGrade,
            MaxRankOfNobility,
            HolyShit
        },
        data() {
            return {
                maxgrade:[{
                    "lv":"167",
                    "username":"对面五头猪",
                    "userid":"a9024323414",
                    "lvimg":"http://www.8090yxs.com/uploads/allimg/140219/1-140219131332528.png",
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
                }]
            }
        },
        methods: {},
    }
</script>
<style>
    .home-main{
        padding: 0.1rem;
    }
</style>