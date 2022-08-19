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

const productListEl = document.querySelector("#sale .list-item");
// API lấy danh sách todo
 function getProductsAPI() {
  return axios.get("http://localhost:3000/products");
}

// Khai báo biến
let products = [];

// Lấy danh sách 
async function getProducts() {
    try {
        const res = await getProductsAPI();
        products = res.data;
        // Render ra ngoài giao diện
        renderProduct(products);
    } catch (error) {
        console.log(error);
    }
}

// Hiển thị sản phẩm 
const renderProduct = arr => {
  productListEl.innerHTML = "";

  // Kiểm tra xem có sản phẩm không
  if(arr.length == 0) {
      productListEl.innerHTML = "Không có sản phẩm nào";
      return;
  }
  // Hiển thị ds sản phẩm nếu có
  let html = "";
  arr.forEach(p => {
      html += `
      <div class="item">
          <div class="row">
            <div class="col-sm-12">
              <div class="image-product">
                <img src="${p.image-product[0]}" alt="anh san pham">
                <div class="btn-view mx-auto d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#quickview-modal">
                  <p class="my-0">Xem nhanh</p>
                </div>
                <div class="saleoff d-flex align-item-center text-white text-center">
                  <p class="">Sale 45%</p>
                </div>
                <div class="like">
                  <span class="like-icon fs-4"><i class="fa-solid fa-heart"></i></span>
                </div>
              </div>

            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href="./product-details.html?id=${p.id}"><div class="product-info">
                <p class="product-brand">${p.product-name}</p>
                <p class="product-name">${p.name}</p>
                <div class="product-price d-flex justify-content-between">
                  <p class="price-sale">${p.price}</p>
                  <p class="price text-decoration-line-through">${p.price - (p.price * p.sale-status)}</p>
                </div>
              </div></a>
            </div>
          </div>
        </div>
      `
  })
  productListEl.innerHTML = html;
  
}
window.onload = () => {
  getProducts();
};
