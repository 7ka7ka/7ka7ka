<template>
    <el-select v-model="value">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>
<script>

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    export default {
        data() {
            return {
                value:getNowFormatDate(),
                options:[
                    {
                        value:'1',
                        label:'2018-03-05'
                    },
                    {
                        value:'2',
                        label:'2018-03-06'
                    }
                ]
            }
        },
        methods: {},
    }
</script>
<style>
</style>