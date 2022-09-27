const swiper = new Swiper(".banner", {
    navigation: {
      nextEl: "#swiper-button-next1",
      prevEl: "#swiper-button-prev1",
    },
    
  });

const settingSlide = {
 
}

const swiper_sale_slide = new Swiper(".section-sale-slide", {
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 6,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: "#swiper-button-next2",
      prevEl: "#swiper-button-prev2",
  }
});
const swiper_popularGame = new Swiper(".popularGame", {
  slidesPerView: 6,
  spaceBetween: 20,
  slidesPerGroup: 6,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: "#swiper-button-next3",
      prevEl: "#swiper-button-prev3",
  }
});

