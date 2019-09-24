// html标签:select操作方法

    // 1、可通过select的selected属性获取到option的值
    "<select id='test'><option value='1'>text1</option><option value='2'>text2</option></select>"

    // jquery方式
    var options = $("#test option:selected");  //获取选中的项
    console.log(options.val());  //拿到选中项的值
    console.log(options.text());  //拿到选中项的文本

    // 原生js方式
    var myselect=document.getElementById("test");  //拿到select对象
    var index=myselect.selectedIndex ; // 拿到选中项的索引,selectedIndex代表的是你所选中项的index
    myselect.options[index].value;  //拿到选中项options的value
    myselect.options[index].text;  //拿到选中项options的text


    // 2、监听select的变化可使用change事件
    $("#test").change(function () {
        console.log("监听到了！")
        //TODO

    })