<template>
    <div>
        <el-row>
            <el-col :span="24">
                <select-character></select-character>
                <el-button type="primary" class="hero-filtrate">筛选</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-tabs type="card">
                    <el-tab-pane label="爵位赛">
                        <card-list :data="juewei"></card-list>
                    </el-tab-pane>
                    <el-tab-pane label="5V5军团赛">
                        <card-list  :data="juntuan">></card-list>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>

</template>
<script>

    import SelectCharacter from './SelectCharacter.vue';
    import CardList from './tab2/CardList.vue';

    export default {
        components: {
            SelectCharacter,
            CardList,
        },
        data() {
            return {
                juewei: [
                    {
                        "hero": "孙尚香尚香",
                        "use_count": "256",
                        "wins": "59.8%",
                        "field1":"293",
                        "field2":"293",
                        "field3":"293",
                        "field14":"293",
                        "tag": "hero",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg"
                    },
                    {
                        "hero": "孙尚香尚香",
                        "use_count": "256",
                        "wins": "59.8%",
                        "field1":"293",
                        "field2":"293",
                        "field3":"293",
                        "field14":"293",
                        "tag": "hero",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg"
                    },
                    {
                        "hero": "孙尚香尚香",
                        "use_count": "256",
                        "wins": "59.8%",
                        "field1":"293",
                        "field2":"293",
                        "field3":"293",
                        "field14":"293",
                        "tag": "hero",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg"
                    },
                ],
                juntuan: [
                    {
                        "hero": "孙尚香尚香",
                        "use_count": "256",
                        "wins": "59.8%",
                        "field1":"293",
                        "field2":"293",
                        "field3":"293",
                        "field14":"293",
                        "tag": "hero",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg"
                    },
                    {
                        "hero": "孙尚香香",
                        "use_count": "256",
                        "wins": "59.8%",
                        "field1":"293",
                        "field2":"293",
                        "field3":"293",
                        "field14":"293",
                        "tag": "hero",
                        "hero1":"http://up.enterdesk.com/edpic_source/04/fc/30/04fc308f7739fb75da865b27d24d1657.jpg"
                    },
                ],
            }
        },
        methods: {},
    }
</script>
<style scoped>

</style>