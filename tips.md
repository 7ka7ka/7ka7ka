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
#### 关于jquery.cookie存储删除的问题  
需要注意的是$.cookie()并非jquery自带的插件功能，需要一个单独的jquery-cookie.js的插件        
关于存储路径和删除路径需要保持一直，在同一个域下可能会存储多个不同路径的cookie         
比如存储cookie的代码如下:  
```
$.cookie("key","value",{expires:7,path:"/"}); 
```         
那么相应的删除cookie的代码也得对应相同的路径:  
```
$.cookie("key","",{expires:-1,path:"/"});  
```
