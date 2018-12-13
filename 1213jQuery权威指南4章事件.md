## jQuery中的事件

### 1. 加载DOM

```js
    
    window.onload = function(){

    }
    //等价于jQuery:

    $("window").load(function(){

    })



    $("document").ready(function(){

    })

```

区别:

1. 执行时机

onload: 网页中所有元素完全加载之后执行

ready: DOM树加载完毕就可执行(如果图片未下载完毕也会执行)

2. 多次使用

ready可以多次使用, onload不行

3. 简写方式

```js
$("document").ready(function(){

})

//==

$(function(){

})

//==

$().ready(function(){

})
```

### 2. 事件绑定

    bind( type [, data], fn)

type 一般包括:
    
    blur focus load resize scroll unload 

    鼠标相关:
    click dbclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave 

    change select submit 

    键盘相关:
    keydown keypress keyup 

    error

data可选:

作为event.data 传入函数

fn: 绑到对象上的函数

click等常用事件可以用简写模式: .click();

### 3. 合成事件

1. hover(enterfn(), leavefn())
2. toggle(fn1, fn2, fn3 ....)

### 4. 事件冒泡

什么是冒泡?

假定三层结构:

    body
        div
            p

各自有各自的click函数, 那么点击最内的p元素

也会触发div 和body 上绑定的click函数

解决方式:

function 提供一个event参数

停止冒泡: event.stopPropagation();

阻止默认事件: event.preventDefault();//举例:表单不符合要求时, 直接event.preventDefault() 就不会提交表单

note: jquery 救不了事件捕获

### 5. 事件对象属性

    event.type(); //返回值同2中type
    event.preventDefault()
    event.stopPropagation()
    event.target //返回触发事件的元素
    event.relatedTarget //返回管理上述元素的元素
    event.pageX/pageY //获得鼠标当前相对于页面的坐标
    event.which //获得鼠标在单击事件中用的哪个按键 1 L 2 M 3 R
    *event.metaKey() //获取ctrl按键
    *event.originalEvent// 指向原始对象


### 6. 移除事件

1. 对于bind的函数 使用unbind解绑
```js

$p.unbind() 

$p.unbind("type", fn);

```

2. 解绑触发一次就不用再触发的函数,直接使用.one()绑定

### 7. 模拟操作

正常触发:

    $btn.trigger("click") 
    //==
    $btn.click();

触发自定义事件:

    $btn.bind("myClick", function(){
        //do something
    })

    $btn.trigger("myClick") 

传参:

    $btn.bind("myClick", function(event, data1, data2){
        //do something
    })

    $btn.trigger("myClick", ["data1", "data2"]) 

### 8. 其他

1. 绑定多个类型事件

```js
$("div p").bind("mouseout mouseenter", function () {
        $(this).toggleClass("over");
    })
```

2. 添加事件命名空间, 便于管理

3. 相同事件命名, 不同命名空间执行方法

```js
    $("div p").bind("click.plugin", function () {
        $(this).toggleClass("over");
    })

    $("div p").bind("dbclick.plugin", function () {
        $(this).toggleClass("over");
    })

    $("div p").bind("dbclick", function () {
        $(this).toggleClass("over");
    })

    //加上命名空间 删的时候只要删 unbind(".plugin")就可以了

    //$div.triggle("click!") //表示触发没有命名空间的click事件
```