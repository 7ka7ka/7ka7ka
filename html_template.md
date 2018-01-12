## HTML页面模版    

### PC端     
```html
<!DOCTYPE html>
<html lang="zh-cn">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <meta name="renderer" content="webkit">
        <title>标题</title>
        <!--[if lt IE 9]>
            <script src="//cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js"></script>
        <![endif]-->
        
    </head>
    <body>
        
    </body>
    <script type="text/javascript" src="//cdn.bootcss.com/jquery/1.12.4/jquery.min.js" ></script>
</html>
```  

### 移动端  
```html
<!DOCTYPE html>
    <html lang="zh-cn">
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
        <meta name="viewport" content="width=1,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
        <meta name="renderer" content="webkit">
        <title>标题</title>
    </head>
    <body>
    </body>
    <script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
</html>
```         

### 表格          
表格已经在当前已经不适用了，目前也只有在EMS才有用处         
```html
<table class="table" border="1" cellspacing="0" cellpadding="5" align="center">
    <thead>
    <tr>
        <th width="10%">h1</th>
        <th width="50%">h2</th>
        <th width="20%">h3</th>
        <th width="20%">h4</th>
    </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2" align="right">footer1: <span class="stat-rate"></span></td>
            <td>footer2: <span class="stat-fights"></span></td>
            <td>footer3: <span class="stat-wins"></span></td>
        </tr>
    </tfoot>
</table>
```

