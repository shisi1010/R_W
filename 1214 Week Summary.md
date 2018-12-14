12月7日起恢复github更新

故本周统计包含12月7日和8日

### 7日: bfs 广度优先遍历

重点: 子节点添加入队列, 出队接口的实现

活用变量当作指针

### 8日: 复习权威指南中函数一章

为9日复习闭包做基础, 函数声明语句和函数表达式的不同

arguments 参数的使用, 伪数组

### 9日: 闭包 字符串比较 括号匹配

闭包: 能够使用父作用域中的私有变量的函数,同时它应该作为接口对外开放.

字符串比较 括号匹配 是比较基础的编程题, 不多加赘述

### 10日: 异步函数的顺序执行

注意 callback && callback();//有callback 才执行callback函数

使用闭包的思路,保存下前一步形成的连接函数

用s暂存以及拼接

s = arr[i](s) ==>

    s = function(){ return arr[i](s) } //s要是个可执行函数

==> 用闭包保存下每一步的状态

    s = (function (cin){ 
        var m = s;
        return function() {
            return arr[cin](m);
        }
    })(i) //掺入步骤

### 11-13日: 锋利的jQuery学习 20问

1. jQuery 库中的 $() 是什么？

$()就是jQuery对象的制造工厂 ,同时也指代$(document), 也是jQuery()的别称

2. 网页上有 5 个\<div> 元素，如何使用 jQuery来选择它们？

$("div")

3. jQuery 里的 ID 选择器和 class 选择器有何不同？

$("#id") $(".class")

4. 如何在点击一个按钮时使用 jQuery 隐藏一个图片？

        $("button").click(function(){
            $("#picid").hidden();
        }) 

5.  $(document).ready() 是个什么函数？为什么要用它？

用于判断DOM树是否加载完全的函数, 使用它来保证js是在页面加载完毕后再进行操作的, 好处是jQuery帮你解决了跨浏览器的难题


6. JavaScript window.onload 事件和 jQuery ready 函数有何不同？

	1). onload只能有一次, jQuery可以存在多个

	2). Onload要等页面所有资源加载完毕才运行, ready在DOM加载好之后就开始行动 

7. 如何找到所有 HTML select 标签的选中项？

$("#select option: selected");

8. jQuery 里的 each() 是什么函数？你是如何使用它的？

遍历元素

9. 你是如何将一个 HTML 元素添加到 DOM 树中的？

.append();.appendTo(); .prepend();

10. 你能用 jQuery 代码选择所有在段落内部的超链接吗？

$("p").attr("href")

11. $(this) 和 this 关键字在 jQuery 中有何不同？

一个是DOM元素一个是jQuery元素

12. 你如何使用jQuery来提取一个HTML 标记的属性 例如. 链接的href?

$(element).attr("href")


13. 你如何使用jQuery设置一个属性值?

$(element).attr("href", "sss")

14. jQuery中 detach() 和 remove() 方法的区别是什么?

15. 你如何利用jQuery来向一个元素中添加和移除CSS类? 

addClass removeClass

16. 使用 CDN 加载 jQuery 库的主要优势是什么 ? 

加载速度快, 报错节省服务器带宽, 如果浏览器已经有相同版本的jQuery无需再重复下载

17.  jQuery.get() 和 jQuery.ajax() 方法之间的区别是什么?

ajax() 方法更强大，更具可配置性, 让你可以指定等待多久，以及如何处理错误。get() 方法是一个只获取一些数据的专门化方法。get是通过ajax实现的 

18. jQuery 中的方法链是什么？使用方法链有什么好处？

代码简洁明了 减少代码量 同时由于只对 DOM 进行了一轮查找，性能方面更加出色

19. 你要是在一个 jQuery 事件处理程序里返回了 false 会怎样？

停止该事件向上冒泡

20. 哪种方式更高效：document.getElementbyId("myId") 还是 $("#myId")？

前者, 后者 要适配多次
