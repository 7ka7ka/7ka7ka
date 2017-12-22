#### 关于点击其他区域当期目标块隐藏的问题   
这里需要用到event事件，其原理就是阻止默认事件，具体代码如下:  
```
$("#a").on("click", function(e){
   $("#b").fadeIn();
   $(document).one("click", function(){
      $("#b").fadeOut();
   });
   e.stopPropagation();
});
$("#b").on("click", function(e){
   e.stopPropagation();
}); 
    
```
