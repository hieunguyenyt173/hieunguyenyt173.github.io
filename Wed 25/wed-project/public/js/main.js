// Đăng nhập, đăng xuất

$(".icon-user").click(function() {
    $(".popup-login").css("display", "flex");
    $(".popup-login").css("top", "50%");
    $(".overlay").css("display", "block");
})

$(".popup-login .close").click(function() {
    $(".popup-login").css("display", "none");
    $(".overlay").css("display", "none");
})

$(".btn-create").click(function() {
    $(".popup-create").css("display", "flex");
    $(".popup-create").css("top", "50%");
    $(".overlay").css("display", "block");
    $(".popup-login").css("display", "none");
})

$(".popup-create .close").click(function() {
    $(".popup-create").css("display", "none");
    $(".overlay").css("display", "none");
})
$(".popup-create .btn-login").click(function() {
    $(".popup-login").css("display", "flex");
    $(".popup-login").css("top", "50%");
    $(".overlay").css("display", "block");
    $(".popup-create").css("display", "none");
})