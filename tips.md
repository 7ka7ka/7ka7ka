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

#### html的url地址设置       
浏览器的url地址改变可以通过linux或者windows的操作指令来创建快捷方式的形式直接指向目标文件        
原理：      
1. linux通过指令在根目录下创建目标文件的快捷方式，"根目录/快捷方式/"的形式即可直接指向目标文件。windows原理一样          
2. windows下直接穿件文件的快捷方式并不能达到我们需要的目的，需要通过cmd来操作才可以         

#### HTML页面定时跳转      
1. 当前页面每5秒刷新一次
```html
<meta http-equiv="refresh" content="5">
```
2. 当前页面2秒后跳到首页
```html
<meta http-equiv="refresh" content="2;url'/'">
```
3. 当前页面跳转到目标页面
```html
<meta http-equiv="refresh" content="0;url='http://www.baidu.com'">
```         

#### 父级背景透明不影响后代元素      
```css
background-color: #000;  
-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0.3);  
filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0.3);       
background-color: rgba(0,0,0, 0.3);
```      
需要注意的是这种方法在ie7、ie8下面无效，因此想要在ie7、ie8下面也实现这种效果目前最好的办法就是用png图来解决        

#### 关于获取HTML滚动距离       
不要使用window.scrollY的方法来获取，该方法在ie下不兼容，使用document.documentElement.scrollTop || document.body.scrollTop来操作即可，前者只有在ie、opera、ff标准模式下有效，后者在ie、opera、ff怪异模式或chrome、safari（怪异模式和标准模式）有效      
所以综合起来最终的写法：         
   水平：document.documentElement.scrollLeft || document.body.scrollLeft；        
   垂直：document.documentElement.scrollTop || document.body.scrollTop；       
         
#### 如何判断页面是在移动端还是PC端打开       
javascript的Navigator对象包含有关浏览器的信息，声明了浏览器用于 HTTP 请求的用户代理头的值。所以可以通过判断navigator.useragent里面是否有某些值来判断      
```js
window.location.href = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "移动端url" : "pc端url";
```
需要注意的是这种写法会造成某一种情况下打开页面会无限循环刷新页面，导致页面一直处于白屏状态，解决办法就是在移动端的里面只写上跳pc的代码, 在pc端里面只写上跳移动端的代码就可以了      

PC
```js
if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   window.location.href = "pc端url";
}
```
移动端
```js
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
   window.location.href = "移动端url";
}
```

#### jQuery mouseover,mouseout事件多次执行的问题处理
问题解析
在用到mouseover和mouseout事件来作为事件触发的条件，单一元素可以正常使用，但是如果我们用做触发的元素内部有其他的元素的时候当鼠标移上的时候会反复 的触发mouseover和mouseout事件。因为内部元素在鼠标移上的时候会向它的父对象派发事件，所以外面元素相当于也触发了mouseover 事件。

解决方法
jquery(需要版本号大于1.2.2)中修复上述问题。
将mouseover,mouseout 替换 mouseenter和mouseleave事件，这是IE特有的函数，使用jquery就很好的解决了兼容问题。函数的原理当第一次鼠标进入节点区域时触发，以后在节点区域内(子节点间)移动时不触发。
```js
$('div').bind("mouseenter",function(){ // 移入 }); 
$('div').bind("mouseleave",function(){ // 移出 }); 
```
        
        
