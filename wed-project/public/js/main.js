const listProductSale = "/products?salestatus=true";
const listItemEl = document.querySelector(".list-item");
const listBestsellerEl = document.querySelector(".list-bestseller");
const listGifftEl =  document.querySelector(".listgift");
const settingSlick = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 450,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
};

function productsApiSale(api) {
  return axios.get(api)
}

let listProduct = [];
async function getProductSale() {
  try {
    const res = await productsApiSale(listProductSale);
     listProduct = res.data;
     let listBestseller = listProduct.filter(p => p.categories == "bestseller")
     let listGift = listProduct.filter(p => p.categories == "GiftSet")
     renderProducts(listProduct, listItemEl, ".list-item");
     renderProducts(listBestseller, listBestsellerEl,".list-bestseller");
     renderProducts(listGift, listGifftEl, ".listgift");
  } catch (error) {
    console.log(error);
  }
}
function renderProducts(arr,list,listUi) {
  list.innerHTML= "";
 let html = "";
  arr.forEach(p => {
    html += `
    <div className="item shadow mb-3 bg-body rounded mx-2">
    <div className="row">
      <div className="col">
        <div className="image-product">
          <img src="${p.imageproduct}" alt="anh san pham">
          <div className="btn-view mx-auto d-flex justify-content-center align-items-center" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#quickview-modal">
            <p className="my-0">Xem nhanh</p>
          </div>
          <div className="saleoff d-flex align-item-center text-white text-center">
            <p className="">Sale 45%</p>
          </div>
          <div className="like">
            <span className="like-icon fs-4"><i className="fa-solid fa-heart"></i></span>
          </div>
        </div>

      </div>
    </div>
    <div className="row">
    <a href="./product-details.html?id=${p.id}">
    <div className="col">
      <div className="product-info d-flex flex-column justify-content-between">
        <p className="product-brand mb-1">${p.brandname}</p>
        <p className="product-name mb-1">${p.name}</p>
        <div className="product-price d-flex justify-content-between">
          <p className="price-sale">${formatMoney(p.price_sale)}</p>
          <p className="price text-decoration-line-through">${formatMoney(p.price)}</p>
        </div>
      </div>
    </div>
  </a>
    </div>
  </div>
  `
  })
  list.innerHTML = html;
  $(listUi).slick(settingSlick);
  
}

const renderQuickview = () => {
  
}
getProductSale()
// Format tiền
const formatMoney = number =>{
  return  number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
 

// Menu-reponsive
$(".menu-bar").click(function () {
  $(".sidebar").css("left", "0");
  $(".overlay").css("display", "block");
  $('body').css('overflow', 'hidden');

})
// close btn
$(".close-icon").click(function () {
  $(".sidebar-brand-women").css("left", "-360px");
  $(".sidebar-women").css("left", "-360px");
  $(".sidebar-brand").css("left", "-360px");
  $(".sidebar-men").css("left", "-360px");
  $(".sidebar").css("left", "-360px");
  $(".overlay").css("display", "none");

})

$(window).resize(function () {
  if ($(window).innerWidth > 768) {
    $(".sidebar").css("left", "-360px");
    $(".overlay").css("display", "none");
  }
})

// Sidebar-men
$(".menu-men").click(function () {
  $(".sidebar-men").css("left", "0");
  $(".overlay").css("display", "block");

})

$(".menu-women").click(function () {
  $(".sidebar-women").css("left", "0");
  $(".overlay").css("display", "block");
})
$(".btn-back-icon").click(function () {
  $(".sidebar-men").css("left", "-360px");
  $(".sidebar-women").css("left", "-360px");
})

$(".btn-back-icon-1").click(function () {
  $(".sidebar-brand").css("left", "-360px");
  $(".sidebar-brand-women").css("left", "-360px");
})

$(".brand-menu").click(function () {
  $(".sidebar-brand").css("left", "0");
  $(".sidebar-brand-women").css("left", "0");
})

// Sidebar-table,mobile
$(".subnav .menu-item-tablet:nth-child(1)").click(function () {
  $(".sidebar-men").css("left", "0");
  $(".overlay").css("display", "block");
})
$(".subnav .menu-item-tablet:nth-child(2)").click(function () {
  $(".sidebar-women").css("left", "0");
  $(".overlay").css("display", "block");
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
$(document).ready(function(){
  $('.list-brands').slick({
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
       
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    
  ]
  });
  $(document).ready(function(){
    $('.list-banner').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      cssEase: 'linear'
    });
  });
});


// Countdown clock
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const nowYear = new Date().getFullYear();
const saleTime = new Date("September 31 2022 00:00:00");
const timeCountdown = function () {
  const nowTime = new Date();
  const diff = saleTime - nowTime;
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(timeCountdown, 1000);





