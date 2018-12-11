## 认识Jquery

### 1.1 JS库

其他的js库 比如: 

Prototype: 对JS内置对象 比如string array做了扩展

...

### 1.2 jQuery的优点

	1. 轻量级
    2. 有很强大的选择器
	3. 出色的DOM操作封装
	4. 可靠的事件处理机制 ("document.getElementById("tt")" 如果没有tt这个id就会报错, 所以一般就加一个判断的if但是jQuery对象就没有这个问题)
	5. 完善的Ajax
	6. 不污染顶级域名 
	7. 浏览器兼容性好
	8. 链式操作
	9. 隐式迭代 (jQuery返回的对象都是自动操作对象集合,无需大量的循环操作)
	10. 行为层与视图层分离
	11. 丰富的插件
	12. 完善的文档
	13. 开源

### 1.3 jQuery的编码风格

• 对于一个对象不超过3个操作,可以写成一行  
    $("li").show().unbind("click");
• 对于同一对象较多操作, 每行写一个
```js
$(this).removeClass("mouseout")
.addClass("mouseover")
.stop()
.fadeTo("fast", 0.6)
.fadeTo("fast", 1)
.unbind("click")
.click(function () {
// do something
})
```
• 可以按照功能分块来换行

```js
$(this).removeClass("mouseout").addClass("mouseover")//对class操作
.stop().fadeTo("fast", 0.6).fadeTo("fast", 1)// 对动画操作
.unbind("click").click(function () {// 解绑然后重新绑定click函数
// do something
})
	
```
### 1.4 DOM对象和jQuery对象


```js

	var foo = document.getElementById("foo")
	//foo 是DOM对象
	foo.innerHTML;
	//等同于
	var $foo = $("#foo")
	//$foo 是jQuery对象
	$foo.html();
	

	//相互转换
	
	var foo = $foo[0]//foo是由jQuery对象转化而来的DOM对象
	var foo = $foo.get(0)//get(index)是jQuery提供的转化方法
	$foo = $(foo) //转回了jQuery对象
```