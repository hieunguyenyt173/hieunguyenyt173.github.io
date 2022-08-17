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

// Countdown clock
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const nowYear = new Date().getFullYear();
const saleTime = new Date("August 19 2022 00:00:00");
const timeCountdown = function(){
  const nowTime = new Date();
  const diff = saleTime - nowTime;
  const h = Math.floor(diff / 1000/60/60) % 24;
  const m = Math.floor(diff / 1000/60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  hours.innerHTML =  h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(timeCountdown, 1000);