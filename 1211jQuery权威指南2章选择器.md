## jQuery 选择器

1. 基本选择器

        $(".css")
        $("#id")
        $("tab")
        $("*")
        $("tab, #id")

2. 层次选择器

        $("div p") //div内所有p
        $("div > p") //div的子元素p
        <!-- $("div + p") //div的下一个p -->
        <!-- $("div ~ p") //div后面所有的p --> //较为少用 可以不记
        $("").next("") //同+
        $("").nextAll("") //同~

3. 过滤选择器

    a. 基本过滤选择器
    
        $("div:first")
        $(":last")
        $(":not()")
        $(":odd")
        $(":even")
        $(":eq()")
        $(":gt()")
        $(":lt()")

    b. 内容过滤选择器

        $("div:contains()")
        $("div:empty")
        $("div:has()")
        $("div:parent")

    c. 可见性过滤选择器

        $("div:visible")
        $("div:hidden").show()
        
    d. 属性过滤选择器

        $("div[title]")
        $("div[title = xx]")
        $("div[title != xx]")
        $("div[title ^= xx]")
        $("div[title $= xx]")
        $("div[title *= xx]")

    e. 子元素过滤选择器

        $("div:only-child")
        $("div:first-child")
        $("div:last-child")
        $("div:nth-child(2n)")

    f. 表单对象属性过滤选择器

        $("#form1 input:enabled").val("change!")
        $("#form1 input:disabled").val("change too!")
        var p = $("#form1 input:checked").length;
        var p = $("select :selected").text();

4. 表单选择器

        :input 
        :text 
        :password 
        :radio 
        :checkbox 
        :submit 
        :image 
        :reset
        :button
        :file
        :hidden



其他注意事项:

1. 选择器有特殊字符 -->转义 (\\)

HTML代码如下：
<divide"id#b">bb</div>
<divid="">cc</div>
如果按照普通的方式来获取，例如：
$('#id#b');

以上代码不能正确获取到元素，正确的写法如下：
$('#id\\#b');//转义特殊字符“#”
$('id\\〔1\\〕');//转义特字符“[]”

2. 特别注意 空格相关
<div class="test">
<div style="display:none;">aa</div>
<div style="display:none;">bb</div>
<div style="display:none;">cc</div>
<div class="test"style="display:none;">dd</div>
</div>
<div class="test"style="display:none;">ee</div>
<div class="test"style="display:none;">ff</diV>

var $t_a=$('.test: hidden');//选的是class 是"test"元素中的隐藏元素
var $t_b=$('.test:hidden');//选的是隐藏的class 是"test"元素
var len_a = $t_a.length;
var len_b = $t_b.length;
Len_a = 4
Len_b = 3

新版本jQuery貌似取缔了$t_a的写法,不再有问题了

本章样例代码见1211.js/1211.html
