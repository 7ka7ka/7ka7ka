<script src="https://pv.sohu.com/cityjson?ie=utf-8"></script>  //获取ip的第三方插件
(function(){
    var ip = returnCitySN["cip"]; //获取本机ip
    var allowIP = ['00.000.000.000']; //允许访问的白名单
    var flag = false;
    
    console.log(ip)
    for(var i=0; i<allowIP.length; i++){
            if (ip == allowIP[i]){
            flag = true;
            break;
        }
    }
    if(!flag){
        alert("您无权限访问该网站。");
        closewin();
    }

    // 访问被拒后的操作
    function closewin(){
        if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") !=-1) {
            window.location.href="";   //指定跳转地址
        } else {
            window.opener = null;
            window.open("", "_self");
            window.close();
        }
    }
})()
    