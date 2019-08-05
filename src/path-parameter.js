// 获取url"?"后面的路径参数
function GetUrlPara()
{
    var url = document.location.toString();
    var arrUrl = url.split("?");

    var para = arrUrl[1];
    return para;
}

// 根据"&"字符分割参数为数组
var userInformation = GetUrlPara().split("&");

// 读取分割后指定数组的详细数据
var userName = userInformation[0].split("=")[1];
$(".lv2-inviter-user").html(decodeURIComponent(userName));   //decodeURIComponent()将被转码的url参数再转回来
sessionStorage.setItem("userName",decodeURIComponent(userName));

var exclusiveId = userInformation[1].split("=")[1];
sessionStorage.setItem("exclusiveId",exclusiveId);