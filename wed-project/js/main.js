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
  // $(".menu-men-desktop").css("top","-70%");
  // $(".menu-women-desktop").css("top","-70%");
  // $(".subnav .menu-item:nth-child(2)").css("background-color", "#E12222")
  // $('body').css('overflow', 'auto');
})

// // Menu-men-desktop
// $(".subnav .menu-item:nth-child(2)").click(function() {
//   $(".menu-men-desktop").css("top","100px");
//   $(".overlay").css("display","block");
//   $(".overlay").css("top","100px");
//   $('body').css('overflow', 'hidden');
// })
// $(".subnav .menu-item:nth-child(3)").click(function() {
//   $(".menu-women-desktop").css("top","100px");
//   $(".overlay").css("display","block");
//   $(".overlay").css("top","100px");
//   $('body').css('overflow', 'hidden');
// })

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


// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
      target: mainCarousel,
      friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
      on: {
          change: (that) => {
              mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                  friction: 0,
              });
          },
      },
  },
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
            
        },
        576:{
            items:3,
            
        },
        992:{
            items:5,
            
            
        }
    },
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: false,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

