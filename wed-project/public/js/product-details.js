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