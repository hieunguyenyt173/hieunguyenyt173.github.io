$(".menu-page").click(function() {
    $(".sub-nav").css("left", "0");
    $(".overlay").css("display", "block");
    $("body").css("overflow", "hidden");
})

$(".close-icon").click(function() {
    $(".sub-nav").css("left", "-250px");
    $(".overlay").css("display", "none");
    $("body").css("overflow", "auto");
})

$(".overlay").click(function() {
    $(".sub-nav").css("left", "-250px");
    $(".overlay").css("display", "none");
    $("body").css("overflow", "auto");
})

$(window).resize(function() {
    if($(window).innerWidth > 992) {
    $(".sub-nav").css("left", "-250px");
    $(".overlay").css("display", "none");
    }
})