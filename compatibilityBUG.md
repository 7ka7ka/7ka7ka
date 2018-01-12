一些浏览器的兼容性和一些bug       

### IE6|IE7中li底部3px间距BUG       
以下是引发此BUG的条件：     
必要条件：     
li的子元素设置了浮动（例如：本例中的a设置了左浮动）     
充要条件：     
(IE6/7)li设置了width、height、zoom 之一 （例如：本文中的li设置了width）      
(仅IE7)li设置了padding-top、padding-bottom、margin-top、margin-bottom 之一     
Html代码：
```html
<div class="hotel_rank">
<h3 class="f14b">特惠酒店推荐</h3>
  <div class="list_icon"></div>
  <ul class="rank_ul clearfix">
    <li><a href="">北京国际俱乐部</a><span class="fr w_rec"><span class="orange fb">￥599</span>起</span></li>
    <li><a href="">北京国际俱乐</a><span class="fr w_rec"><span class="orange fb">HKD599</span>起</span></li>
    <li><a href="">北京国际俱饭店</a><span class="fr w_rec"><span class="orange fb">￥599</span>起</span></li>
    <li><a href="">北俱乐部饭店</a><span class="fr w_rec"><span class="orange fb">HKD599</span>起</span></li>
    <li><a href="">北京国际部饭店</a><span class="fr w_rec"><span class="orange fb">￥599</span>起</span></li>
  </ul>
</div>
```
Css代码：
```css
.hotel_rank{border:#cbcbcb 4px solid; border-top:none; width:192px;position:relative;}
.hotel_rank h3{border-bottom:1px solid #cbcbcb; height:30px; line-height:30px; padding-left:8px;}
.hotel_rank .rank_ul{padding-top:6px; margin-left:4px; }
.list_icon{ position:absolute; background:url(../images/list.png) no-repeat;top:42px; left:5px; height:109px; width:13px;}
.hotel_rank .rank_ul  li{ height:24px; padding-left:17px; line-height:24px;}
.hotel_rank .rank_ul li  a{width:100px; float:left; height:24px; line-height:24px; overflow:hidden;}
.hotel_rank .rank_ul li .orange{color:#ec8208;}
.hotel_rank .rank_ul li .w_rec{width:60px;}
```
FF、IE8、chrome浏览器显示如下图所示：      
![ie8](/src/assets/images/liie8.jpg)       
IE6、IE7中显示如下图所示：      
![ie7](/src/assets/images/liie7.jpg)      
解决方案：     
方案一     
#list li设置clear:left|both，这时#list li不能设置width、height、zoom。      
方案二     
.hotel_rank .rank_ul li设置float:left，这时.hotel_rank .rank_ul li可以设置width、height、zoom。     
方案三     
给li中的a设置vertical-align:top|middle|bottom      
这个例子中。方案二和方案三都可以解决这个问题。 
