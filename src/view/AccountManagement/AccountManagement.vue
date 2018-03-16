<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div>默认领奖角色</div>
            </el-col>
        </el-row>
        <el-row >
            <el-col :span="6">
                <div>{{ accountdata.servicearea }}</div>
            </el-col>
            <el-col :span="6">
                <div>{{ accountdata.username }}</div>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" class="account-replace">更换</el-button>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" class="account-binding">绑定更多</el-button>
            </el-col>
        </el-row>
        <account-details :data="accountdata2"></account-details>
    </div>
</template>
<script>
    import AccountDetails from './AccountDetails.vue';

    export default {
        components:{
            AccountDetails
        },
        data() {
            return {
                accountdata:{
                    "servicearea":"铁甲雄兵",
                    "username":"对面五头猪"
                },
                accountdata2:[
                    {
                        "userid":"a123456798",
                        "servicearea":["铁甲雄兵","金戈铁马"],
                        "username":["对面五头猪","专业坑队友"]
                    },
                    {
                        "userid":"qq9789645646",
                        "servicearea":["铁甲雄兵","烽火连天"],
                        "username":["汪汪汪汪汪","你咋不上天"]
                    }
                ]
            }
        },
        methods: {},
    }
</script>
<style>
</style>