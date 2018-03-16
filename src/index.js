import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
// import 'element-ui/lib/theme-chalk/index.css'
import Home from './view/Home.vue';
import App from './view/App.vue';
import App2 from './view/App2.vue';
import Account from './view/AccountManagement/AccountManagement.vue';

Vue.use(ElementUI, {
    size: 'mini', // set element-ui default size
});
Vue.use(VueRouter);


new Vue({
    el:'#app',
    template: '<Account />',
    components: {
        Home,
        App,
        App2,
        Account
    }
});

//页面收藏按钮切换
(function () {
    var off = true;
    $(".collect").click(function () {
        if (off){
            $(this).removeClass("el-icon-star-off").addClass("el-icon-star-on");
            off = false;
        }else{
            $(this).removeClass("el-icon-star-on").addClass("el-icon-star-off");
            off = true;
        }
    });
})();

