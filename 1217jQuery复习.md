
## 基础

### 核心

``` js

    jQuery("CSS选择器")// 返回匹配的jQuery元素

    jQuery("<DOM></DOM>")// 动态创建jQuery对象包装的DOM元素

    jQuery(element)// DOM元素转化为jQuery元素

    jQuery(callback)// 相当于 jQuery(document).ready(callback)

```


### 对象访问

``` js

    jQuery().each(callback)// 以匹配的jQuery对象为上下文执行callback函数

    .length/size() // 元素个数

    .eq(position) //获取position位置的元素

    .index(subject) //返回匹配元素的索引

//不常用 && 易混淆
    .selector // 返回选择该元素的选择器\
    .context //返回元素的DOM内容

    .get() //取得所有匹配的DOM元素集合
    .get(index) //取得所有匹配的DOM元素

```

### 数据缓存

``` js

   .data(name [, value]) //获得对象对应名字的数据 , 加value就是输入数据 返回value

   .removeData(name) //移除元素上存放的数据

   .queue([callback]) //获取第一个匹配元素的函数队列的引用 有callback就是在末尾加一个可执行函数

   dequeue() //移除第一个匹配元素的函数队列

```

### 插件机制 && 多库共存

``` js

jQuery.fn.extend(object) //拓展jQuery元素, 提供新方法
jQuery.extend(object) //拓展jQuery对象本身

jQuery.noConfliet() // 将$交给其他库

```