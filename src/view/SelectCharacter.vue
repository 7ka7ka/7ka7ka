<template>
    <el-select v-model="value">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>
<script>
    export default {
        data () {
            return{
                 value:"全部",
                 options:[
                     { value:'选项1', label:'全部'},
                     { value:'选项2', label:'角色一号啊啊啊'},
                     { value:'选项3', label:'角色二号'}
                 ]
            }
        }
    }
</script>
<style>

</style>