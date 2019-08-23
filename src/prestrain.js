// 背景图片预加载(只针对背景图片)

//需要预加载的背景图片资源
var imgArr = [
    "//images/1.png",
    "//images/2.png",
    "//images/3.png",
    ......
];

//需要预加载的背景图片资源
var imgArr2 = [
    "//images/1.png",
    "//images/2.png",
    "//images/3.png",
    ......
];

// 用来存放被创建的img标签的数组，初始化为空
var imgs = [];

preloadImg(imgArr);

// 利用 Image()函数创建img标签并赋值src路径到本地，当页面资源需要请求资源时无需再通过网络请求，直接可从本地获取资源
function preloadImg(pars) {
    for (var i = 0; i < pars.length; i++){
        imgs[i] = new Image();
        imgs[i].src = pars[i];
    }
}

// jquery scroll事件，绑定页面滚动条，监听滚动事件
$(window).bind("scroll",function () {
    var top = $(this).scrollTop();
    var num = 1100;
    if (top >= num){
        preloadImg(imgArr2)
    }
});