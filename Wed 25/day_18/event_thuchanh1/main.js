listContent = [
"Lorem ipsum dolor", "consectetur adipisicing", "si debitis enim t", "m provident magn"
]
// Khi nhấn vào button “Change content” hiển thị một nội dung quote bất kỳ
const para = document.getElementById("text");
const changeContent = () => {
    let content =(listContent[Math.floor(Math.random() * 4)]);
    para.innerText = content;
}

// Khi nhấn vào button “Change color” thì thay đổi màu của thẻ p (sử dụng màu HEX - cần viết 1 function để random màu HEX)
const btn2 = document.getElementById("btn-2");
listHex = ["a", "b", "c", "d", "e", "f", "0","1","2","3","4","5","6","7","8","9"];
    randomColor = "";
 for(let i = 0; i < 6; i++) {
    randomColor += listHex[Math.floor(Math.random() * 16)]
 }
btn2.onclick = function() {
    para.style.color = `#${randomColor}`;
}
console.log();

// Khi nhấn vào button “Change background” thì thay đổi màu background-color của thẻ p (sử dụng màu RGB - cần viết 1 function để random màu RGB)
const randomRgb = () => {
    Math.floor(Math.random() * 256)
}

