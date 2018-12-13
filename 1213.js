// $(function () {

    //绑定
    // $(".content").hide();

    // $("div p").bind("mouseenter", function (event) {
    //     $(".content").show();
    //     // console.log(event.target)
    //     // console.log(event.relatedTarget)
    //     console.log(event.pageX + " " + event.pageY)
    // })

    // $("div p").bind("mouseout", function () {
    //     $(".content").hide();
    // })

    // ==

    // $("div p").bind("mouseout mouseenter", function () {
    //     $(this).toggleClass("over");
    // })


    // $("div p").bind("mouseout mouseenter", function () {
    //     $(this).toggleClass("over");
    // })

    // $("div p").bind("click.plugin", function () {
    //     $(this).toggleClass("over");
    // })

    // $("div p").bind("dbclick.plugin", function () {
    //     $(this).toggleClass("over");
    // })

    // $("div p").bind("dbclick", function () {
    //     $(this).toggleClass("over");
    // })

    // //加上命名空间 删的时候只要删 unbind(".plugin")就可以了

    // //$div.triggle("click!") //表示触发没有命名空间的click事件

    //==

    // $("div p").hover(function () {
    //     $(".content").show();
    // }, function () {
    //     $(".content").hide();
    // })

    // $("element").show(slow)//还有normal fast分别对应时间600 400 200ms

// })


$(function () {

    $("p").next("div").hide();

    $(":input").focus(function () {
        $(this).addClass("focus");
    }).blur(function () {
        $(this).removeClass("focus")
    })

    $("tbody>tr:odd").addClass("odd");
})