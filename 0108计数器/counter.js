$().ready(function () {

    var javaNumber = 0;
    var pythonNumber = 0;
    var goNumber = 0;

    $(".content1").text("javaNumber");
    $(".content2").html(pythonNumber);
    $(".content3").html(goNumber);

    $("#Jplus").click(function () {
        javaNumber++; $("p:first").text(javaNumber);
    })
    $("#Jsub").click(function () {
        javaNumber--; $("p:first").text(javaNumber);
    })

    $("#Pplus").click(function () {
        pythonNumber++; $(".content2").html(pythonNumber);
    })
    $("#Psub").click(function () {
        pythonNumber--; $(".content2").html(pythonNumber);
    })

    $("#Gplus").click(function () {
        goNumber++; $(".content3").html(goNumber);
    })
    $("#Gsub").click(function () {
        goNumber--; $(".content3").html(goNumber);
    })
})