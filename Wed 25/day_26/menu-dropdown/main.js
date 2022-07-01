const btn = document.querySelector(".menu-icon");
const menuEl = document.querySelector(".menu ul");


btn.addEventListener("click", () => {
    menuEl.classList.toggle("show");
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768) {
        menuEl.classList.remove("show");
    }
})


// jQuerry
// let isShow = false;
// $(".menu-icon").click(function() {
//     isShow = !isShow
//     $(".menu ul").slideToggle(function() {
//         if(isShow) {
//             $(".menu ul").css("display", "flex");
//         } else {
//             $(".menu ul").css("display", "none");
//         }
//     });
// })

// $(window).resize(function () { 
//     if($(window).innerWidth() > 768) {
//         isShow = false;
//         $(".menu ul").css("display", "flex");
//     } else {
//         $(".menu ul").css("display", "none");
//     }
// });