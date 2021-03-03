/* 按钮左右切换，只切换一个位置，原理是使用css的transform来完成 */

/** 以下面这段元素标签为例*/

'<div class="list">'+
    '<input type="button" class="left-btn">'+
    '<ul>'+
        '<li>1</li>'+
        '<li>2</li>'+
        '<li>3</li>'+
        '<li>4</li>'+
    '</ul>'+
    '<input type="button" class="right-btn"></input>'+
'</div>'

var liWidth = number; // 变量，每个a标签的宽度
var liMargin = number; // 变量，每个a标签的margin
var int = number; // 变量，容器宽度里能显示的最大量
var liSumWidth = liWidth + liMargin; // 每个a标签宽度+margin的总和
var LeftBtnState = true; //左按钮状态，开关作用，避免无限点击
var RightBtnState = true; //右按钮状态

//左切换按钮
$(".left-btn").on("click",function(){
    var liLength = $(".list ul li").length; //获取内容长度
    if (liLength > int && LeftBtnState) {
        LeftBtnState = false;
        var translateLeft = $('.list ul').css("transform").replace(/[^0-9\-,]/g,'').split(',')[4]; //获取ul的translateX值
        if (translateLeft && translateLeft < 0) {
            $(".list ul").css({
                transform:"translateX("+ -(Math.abs(translateLeft)-Math.abs(-liSumWidth)) +"px)"
            })
        }
        setTimeout(function(){
            LeftBtnState = true;
        },500)
    }
})

//右切换按钮
$(".plate2-right-btn").on("click",function(){
    var liLength = $(".list ul li").length; //获取内容长度
    var upperLimit = (liLength - int)*liSumWidth ; //获取偏移量上限
    if (liLength > int && RightBtnState) {
        RightBtnState =false;
        var translateLeft = $('.list ul').css("transform").replace(/[^0-9\-,]/g,'').split(',')[4]; //获取ul的translateX值
        if (translateLeft && Math.abs(translateLeft) < upperLimit){
            if (translateLeft > 0 ) {
                $(".list ul").css({
                    transform:"translateX(0px)"
                })
            } else {
                $(".list ul").css({
                    transform:"translateX("+ -(Math.abs(liSumWidth)+Math.abs(translateLeft)) +"px)"
                })
            }
        } else if (!translateLeft) {
            $(".list ul").css({
                transform:"translateX("+ -liSumWidth +"px)"
            })
        }
        setTimeout(function(){
            RightBtnState = true;
        },500)
    }
})

/** 以上已经完成左右切换功能，最后只需给ul添加一个 "transition: all time" 的css属性来控制偏移时的过渡效果即可 */