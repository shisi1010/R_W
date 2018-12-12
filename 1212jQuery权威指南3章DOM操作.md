
## DOM: core-DOM html-DOM css-DOM


DOM-core :

document.getElementById("id");

document.getElementsByagName("form");

element.getAttribute("src")

element.setAttribute("src")

HTML-DOM

document.forms

element.src

CSS-DOM

element.style.color = "red";


### core-DOM

    console.log($("ul li:eq(1)").text());
    console.log($("ul li:eq(1)").attr("title"));

    var $li2 = $("<li title='melon'>melon</li>")
    var $li1 = $("<li title='pineapple'>pineapple</li>")


### html-DOM

插入节点
    
    $("ul").append($li1).append($li2);
    $li1.appendTo($("ul"))
    $("ul").prepend($li1)// 置于ul所有子元素之前
    $li1.perpendTo($("ul")) //同上

    $("li").after($li1)
    $li1.insertAfter($("li"))
    $("li").before($li2)
    $li1.insertBefore($("li"))

移除/清空/复制 节点
    
    $(".job_ad_side").remove();
    $("li:eq(1)").empty();
    $("ul li").click(function () {
        $(this).clone(true).appendTo($("ul"))
    })
替换节点
    
    $("li:eq(1)").replaceWith($("<li>watermelon</li>"))
    $("<li>watermelon</li>").replaceAll($("li:eq(1)"))
包裹节点
    
    $("li").wrap($("<p></p>"))
    $("li").wrapAll($("<p></p>"))
    $("li").wrapInner($("<p></p>"))

属性操作

1. 获取
    
    var $para = $("p");

    $title = $para.attr("title")

2. 设置

    $title = $para.attr("title", "哈哈哈")

    $title = $para.attr("title")

    console.log($title);

3. 删除

    $para.removeAttr("title")

### CSS-DOM

```js
    var $button = $("<button>修改p标签样式</button>")

    var flag = true;
    $button.click(function () {
        if(flag){
            $("p").addClass("another");
            flag = false;
        }else{
            $("p").removeClass("another");
            flag = true;
        }
        
    })
    //等同于

    $button.click(function () {
        if ($("p").is(".another")) { //hasClass 在新版本中貌似无效了
            $("p").removeClass("another");
        } else {
            $("p").addClass("another");
        }
    })
    //等同于
    $button.click(function () {
        $("p").toggleClass("another");
    })

    $("p").append($button)
```

获取文本内容:

    html()返回包括标签的文本
    console.log($("p").html());
    console.log($("p").html("<strong>your fruit</strong>"));
    text()返回文本
    console.log($("p").text())
    console.log($("p").text("hello"))
    val()返回value的值
    console.log($("p").val())


    实现清楚文本框内容
    $("#address").focus(function () {
        var txtval = $(this).val();
        if(txtval == "input email address"){
            $(this).val("");
        }
    })
    $("#address").blur(function () {
        var txtval = $(this).val();
        if (txtval == "") {
            $(this).val("input email address");
        }
    })

    $(":checkbox").val(["checkbox2", "checkbox3"])//多选的值就用数组输入

遍历节点

.children()//返回子节点集合 可以用length返回个数

.next()//下一个同辈元素

.prev()//前一个同辈元素

.siblings()//其他的同辈元素

.close(element)//最近的匹配元素

CSS-DOM操作

$("p").css("color")//获取

$("p").css("color", "red")//改变一个

$("p").css({"color":"red" , "fontsize":"30px"})//改变多个style

其他常用

    console.log($("p").offset().left);//在当前视窗的相对左偏移
    console.log($("p").offset().top);//在当前视窗的相对右偏移

    
    console.log($("p").position().left);//相对最近的祖父节点的相对左偏移
    console.log($("p").position().top);//相对最近的祖父节点的相对右偏移

    console.log($("p").scrollTop());//获取元素的滚动条距离顶端的距离
    console.log($("p").scrollLeft(100));//元素的横向滚动条滚动到指定位置

