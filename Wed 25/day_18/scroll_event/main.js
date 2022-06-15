const btnTop = document.querySelector(".btn-top")
window.addEventListener("scroll", function () {
    // Mốc hiển thị 300 
    if(document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    }
    else {
        btnTop.style.display = "none";

    }
});
btnTop.addEventListener("click", function() {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})

// Khi người dùng nhập password và bấm nút “Show”, lúc này hiển thị password và nội dung button chuyển từ “Show” --> “Hide”
// Ngược lại khi người dùng bấm vào nút “Hide”, lúc này ẩn password và nội dung button chuyển từ “Hide” --> “Show”
const inputPass = document.querySelector("input")
const btnShow = document.querySelector(".btn-show");
btnShow.addEventListener("click", function() {
    if(inputPass.type == "password") {
        inputPass.type = "text";
        btnShow.innerText = "Hide";
    }
    else {
        inputPass.type = "password"
        btnShow.innerText = "Show";
    }
})