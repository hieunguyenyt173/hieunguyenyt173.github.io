const sayHello = () => {
    alert("Xin chào các bạn 1");
}
const btn2 = document.getElementById("btn-2");
// btn2.onclick = function() {
//     alert("Xin chào các bạn 2")
// }
const sayHello2 = () => {
    alert("Xin chào các bạn 2");
}
btn2.onclick = sayHello2;

// <!-- Sử dụng addEventListener -->
const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click",function() {
    alert("Xin chào các bạn 3");
})