
### show() 和 hide() 

隐藏和显示元素

在不带参数的情况下等同于 
        
        element.css("display","none")//show()就把none换成block或是inline

时间参数：

```js
$("element").show(slow)//还有normal fast分别对应时间600 400 200ms

$("element").show(1000) //1000ms
```

### sildeUp() sildeDown()

当其display 为none 时， sildeDown由上而下慢慢展开 sildeUp 反之

### animate(params,  speed, callback);

params: 属性映射 {property:"value1", property:"value2"}

speed: 速度 可选

callback: 回调 可选

//这一章不想细看，回头有空补上
