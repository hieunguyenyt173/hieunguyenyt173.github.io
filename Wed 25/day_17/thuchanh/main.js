
// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById("heading")
heading.style.color = "red";
heading.style.textTransform = "upperCase";
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paras = document.getElementsByClassName("para");
Array.from(paras).forEach(ele => {
    ele.style.color = "blue";
    ele.style.fontSize = "20px";
})

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

const link = document.createElement("a")
link.href = "https://www.facebook.com/";
link.innerText = "facebook";
const para3 = document.querySelector(".para-3")
para3.insertAdjacentElement("afterend", link);
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”

const title = document.getElementById("title");
title.innerText = "Đây là thẻ tiêu đề";
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const textBold = document.querySelector(".text-bold");
textBold.style.fontWeight = "bold";

//Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
para3.innerHTML = "<button>Click me</button>";

//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2");
const coppyPara2 = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", coppyPara2);
//Xóa thẻ có class=“para-1” 
const para1 = document.querySelector(".para-1")
document.body.removeChild(para1);