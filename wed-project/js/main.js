// Menu-reponsive
$(".menu-bar").click(function() {
  $(".sidebar").css("left","0");
  $(".overlay").css("display","block");
  $('body').css('overflow', 'hidden');
  
})
// close btn
$(".close-icon").click(function() {
  $(".sidebar-brand-women").css("left","-360px");
  $(".sidebar-women").css("left","-360px");
  $(".sidebar-brand").css("left","-360px");
  $(".sidebar-men").css("left","-360px");
  $(".sidebar").css("left","-360px");
  $(".overlay").css("display","none");
  $(".menu-men-desktop").css("top","-70%");
  $(".subnav .menu-item:nth-child(2)").css("background-color", "#E12222")
  $('body').css('overflow', 'auto');
})

// Menu-men-desktop
$(".subnav .menu-item:nth-child(2)").click(function() {
  $(".subnav .menu-item:nth-child(2)").css("background-color", "#000")
  $(".menu-men-desktop").css("top","100px");
  $(".overlay").css("display","block");
  $(".overlay").css("top","100px");
  $('body').css('overflow', 'hidden');
})

$(window).resize(function() {
  if($(window).innerWidth > 768) {
      $(".sidebar").css("left", "-360px");
      $(".overlay").css("display","none");
  }
})

// Sidebar-men
$(".menu-men").click(function() {
  $(".sidebar-men").css("left","0");
  $(".overlay").css("display","block");
  
})

$(".menu-women").click(function() {
  $(".sidebar-women").css("left","0");
  $(".overlay").css("display","block");
})
$(".btn-back-icon").click(function() {
  $(".sidebar-men").css("left","-360px");
  $(".sidebar-women").css("left","-360px");
})

$(".btn-back-icon-1").click(function() {
  $(".sidebar-brand").css("left","-360px");
  $(".sidebar-brand-women").css("left","-360px");
})

$(".brand-menu").click(function() {
  $(".sidebar-brand").css("left","0");
  $(".sidebar-brand-women").css("left","0");
})

// Sidebar-table,mobile
$(".subnav .menu-item-tablet:nth-child(1)").click(function() {
  $(".sidebar-men").css("left","0");
  $(".overlay").css("display","block");
})
$(".subnav .menu-item-tablet:nth-child(2)").click(function() {
  $(".sidebar-women").css("left","0");
  $(".overlay").css("display","block");
})
// Đăng nhập, đăng xuất

$(".icon-user").click(function () {
  $(".popup-login").css("display", "flex");
  $(".popup-login").css("top", "50%");
  $(".overlay").css("display", "block");
});

$(".popup-login .close").click(function () {
  $(".popup-login").css("display", "none");
  $(".overlay").css("display", "none");
});

$(".btn-create").click(function () {
  $(".popup-create").css("display", "flex");
  $(".popup-create").css("top", "50%");
  $(".overlay").css("display", "block");
  $(".popup-login").css("display", "none");
});

$(".popup-create .close").click(function () {
  $(".popup-create").css("display", "none");
  $(".overlay").css("display", "none");
});
$(".popup-create .btn-login").click(function () {
  $(".popup-login").css("display", "flex");
  $(".popup-login").css("top", "50%");
  $(".overlay").css("display", "block");
  $(".popup-create").css("display", "none");
});

// Slider brand
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    },
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

