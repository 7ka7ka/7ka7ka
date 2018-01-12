$(function () {
    // 轮播事件
    Slider_play();
    function Slider_play(){
        var box = document.getElementById('bannerSilder');
        var slider = box.getElementsByTagName('div');
        var imgs = slider[0].getElementsByTagName('li');
        // 根据轮播图数量新增小按钮
        for (var i = 0; i < imgs.length; i++) {
            var newListItem = document.createElement('a');
            slider[1].appendChild(newListItem);
        }
        var btn = slider[1].getElementsByTagName('a');
        btn[0].className = 'cur';
        imgs[0].style.zIndex = 5;
        var timer = 0;
        var play = null;

        function show(a){
            for(i=0;i<btn.length;i++ ){
                btn[i].className = '';
                imgs[i].style.zIndex = 0;
            }
            btn[a].className = 'cur';
            imgs[a].style.zIndex = 5;
        }

        //切换按钮功能，响应对应图片
        for(i=0;i<btn.length;i++){
            btn[i].index = i;
            btn[i].onclick = function(){
                timer = this.index;
                show(timer);
                clearInterval(play);
            }
        }

        //自动轮播方法
        function autoPlay(){
            play = setInterval(function(){
                timer++;
                timer >= imgs.length && (timer = 0);
                show(timer);
            },3000)
        }
        autoPlay();

        //div的鼠标移入移出事件
        box.onmouseover = function(){
            clearInterval(play);
        };

        box.onmouseout = function(){
            autoPlay();
        };
    }
})