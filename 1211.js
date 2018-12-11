
// $(document).ready(function () {
//     var p = $("p");
//     p.css("background", "red")
//     var len = p.length;

//     for(var i = 0;i<len;i++){
//         if(i%2 == 0){
//             $(p[i]).click(function () {
//                 console.log("奇数");
//             })
            
//         }
//         else{
//             $(p[i]).click(function () {
//                 console.log("偶数");
//             })
//         }
//     }
// })


$(document).ready(function () {

    /* 基本选择器 */
    // $("#one").css("background", "#66ccff")
    // $(".one").css("background", "#66ccff")
    // $("div").css("background", "#66ccff")
    // $("*").css("background", "#622eef")
    // $("span, #two").css("background", "#bbffaa")

    /* 层次选择器 */
    // $("body div").css("background", "#bbffaa")//选的是body里面的所有div

    // $("body > div").css("background", "#bbffaa")//选的是body里面的第一层div(子元素)

    // $(".one + div").css("background", "#bbffaa")//class = one的后一个div
    /* 等同于 */
    // $(".one").next("div").css("background", "#bbffaa")//

    // $("#two ~ div").css("background", "#bbffaa")//选择id = two 之后的所有div
    /* 等同于 */
    // $("#two").nextAll("div").css("background", "#bbffaa")//
    
    /* 过滤选择器 */
    /* 基本过滤选择器 */
    // $("div:first").css("background", "#bbffaa")

    // $("div:last").css("background", "#bbffaa")

    // $("div:not(.one)").css("background", "#bbffaa")


    // $("div:even").css("background", "#bbffaa")

    // $("div:odd").css("background", "#bbffaa")



    // $("div:eq(3)").css("background", "#bbffaa")
    
    // $("div:gt(3)").css("background", "#bbffaa")

    // $("div:lt(3)").css("background", "#bbffaa")


    // $(":header").css("background", "#bbffaa")

    // $(":animated").css("background", "#bbffaa")

    /* 内容过滤选择器 */
    // $("div:contains(class)").css("background", "#bbffaa")

    // $("div:empty").css("background", "#bbffaa")

    // $("div:has(one)").css("background", "#bbffaa")//不兼容?

    // $("div:parent").css("background", "#bbffaa")

    /* 属性过滤选择器 */
    // $("div[title]").css("background", "#bbffaa")

    // $("div[title = test]").css("background", "#bbffaa")

    // $("div[title != test]").css("background", "#bbffaa")

    // $("div[title ^= te]").css("background", "#bbffaa")

    // $("div[title $= st]").css("background", "#bbffaa")

    // $("div[title *= es]").css("background", "#bbffaa")

    // $("div[id][title]").css("background", "#bbffaa")

    /* 子元素过滤选择器 */
    // $("div.one:nth-child(2n)").css("background", "#bbffaa")

    // $("div:first-child").css("background", "#bbffaa")

    // $("div:last-child").css("background", "#bbffaa")

    // $("div:only-child").css("background", "#bbffaa")

    /* 可见性过滤选择器 */
    // $("div:visible").css("background", "#bbffaa")

    // $("div:hidden").show(3000)


    /* 表单对象属性过滤选择器 */

    // $("#form1 input:enabled").val("change!")

    // $("#form1 input:disabled").val("change too!")

    // var p = $("#form1 input:checked").length;

    // var p = $("select :selected").text();
    
    // console.log(p);

    /* 其他表单选择器 */

    /* 	
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
    */


    /* 其他注意事项 */


    // var $t_a = $('.test: hidden');//选的是class 是"test"元素中的隐藏元素
    var $t_b = $('.test:hidden');//选的是隐藏的class 是"test"元素
    // var len_a = $t_a.length;
    var len_b = $t_b.length;
    // console.log(len_a);
    console.log(len_b);

    
})