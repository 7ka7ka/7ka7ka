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
#### 关于HTML页面id生成的小技巧      
在实际的HTML页面开发中应当尽可能的减少使用id来命名元素，但某些特定的情况下只能使用id命名来处理         
可以避免在HTML页面直接写入id名，通过js来生成       
代码如下:       
HTML
```html
<div role="abc"></div>
```      
JS
```js
var name_id = 'abc' + Math.random();
var $abc = body.find('[role=abc]');
$abc.append('<div id="'+name_id+'"></div>')
```      
#### 关于本地虚拟端口        
除了使用XAMPP来设置虚拟主机和端口外，webstorm的设置里面也提供一个简单的端口设置，具体使用方法可以百度"webstorm本地虚拟主机端口修改"
