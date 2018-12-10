
$(document).ready(function () {
    var p = $("p");
    p.css("background", "red")
    var len = p.length;

    for(var i = 0;i<len;i++){
        if(i%2 == 0){
            $(p[i]).click(function () {
                console.log("奇数");
            })
            
        }
        else{
            $(p[i]).click(function () {
                console.log("偶数");
            })
        }
    }
})


$(document).ready(function () {
    $("#one").css("background", "#66ccff")
    $(".one").css("background", "#66ccff")
})