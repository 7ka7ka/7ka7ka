<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item>
                    <div  slot="title">标题</div>
                <div>内容1</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="2">
                <div>内容2</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName:'1'
            }
        },
        methods: {},
    }
</script>
<style>
</style>