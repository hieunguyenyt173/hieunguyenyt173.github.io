// Truy cập thông qua id
const heading = document.getElementById("heading");
console.log(heading);

// Truy cập thông qua tagName 
// HTMLCollection Giống như mảng nhưng bản chất không phải là mảng
// HTMLCollection là tập hợp các node ở dạng Element Node
// Node : Element Node, Text Node, Comment Node, Artribute Node,...

const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[0]); // Truy cập para1
console.log(paras.length);
// Duyệ HTMLCollection 
for(let i = 0; i < paras.length; i++) {
    console.log(paras[i]);
    paras[i].style.color = "green"
}
Array.from(paras).forEach(element => {
    console.log(element);
})

// Truy cập thông qua class name
const parasClassName = document.getElementsByClassName("para")
console.log(parasClassName);
// Truy cập thông qua CSS Selector
const h1 = document.querySelector("#heading");
console.log(h1);

const para1 = document.querySelector("p");
console.log(para1);

const para2 = document.querySelector(".para")
console.log(para2);

const para3 = document.querySelector("body p:nth-child(4)")
console.log(para3);

const ul2 = document.querySelector(".box + ul")
console.log(ul2);
const ul1 = document.querySelector("ul")
console.log(ul1);
 
// Truy cập thông qua CSS SelectorAll
const listUl2 = document.querySelectorAll("body > ul li")
console.log(listUl2);
const listUl = ul2.querySelectorAll("li")
console.log(listUl);
// Truy cập class box thông qua quan hệ ae
const box = para3.nextElementSibling;
console.log(para3.nextElementSibling);
console.log(ul2.previousElementSibling);

console.log(ul2.children);
console.log(ul2.firstElementChild);

// Thay đổi thuộc tính CSS
heading.style.color = "red";
heading.style.backgroundColor = "yellow";

// Lây ra nội dung phần tử
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);
// Thay đổi nội dung:
heading.innerHTML = "Xin chào";
heading.innerHTML = "<span> Xin chào các bạn </span>"

// Thêm phần tử dom
document.body.prepend(para1);
document.body.append(para1);

box.prepend(para1);
box.appendChild(para1);
document.body.insertBefore(para1,para3);

// Tạo phần tử DOM
// Ví dụ: Tạo ra thẻ a link đén trang GG
const link = document.createElement("a");
link.innerText = "Trang google";
link.href = "https://www.google.com/";

console.log(link);
document.body.appendChild(link);
document.body.insertBefore(link,ul2);

// Tạo thẻ input,type = "text", placeholder = "Enter name";
// Vị trí đằng trước para2;
const input = document.createElement("input")
input.type = "text";
input.placeholder = "Enter name"
console.log(input);
document.body.insertBefore(input, para2);

// Thêm cách 2:
// document.body.insertAdjacentElement("afterbegin",link);
heading.insertAdjacentElement("beforebegin",link);
box.insertAdjacentHTML("afterend", "<button>Click me</button>");

// Sử dụng vòng lặp để tạo nội dung và insert
let links = [
    {
        link: "https://www.facebook.com/",
        title: "Trang facebook"
    },
    {
        link: "https://www.instagram.com/",
        title: "Trang insragram"
    },
    {
        link: "https://twitter.com/?lang=vi",
        title: "Trang twitter"
    },
]

// Truy cập
const socialMedia = document.querySelector(".social-media");
// Cách 1: tạo thẻ và chèn 
// links.forEach(ele => {
//     const link = document.createElement("a");
//     link.innerText = ele.title;
//     link.href = "ele.link";
//     socialMedia.appendChild(link);
// })
// Cách 2: insert trực tiếp html
// links.forEach(ele => {
//     socialMedia.insertAdjacentHTML("beforeend", `<a href="${ele.link}">${ele.title}</a>`);
// })
// Cách 3:  insert trực tiếp html innerHTML
let html = "";
links.forEach(ele => {
        html += `<a href="${ele.link}">${ele.title}</a>`;

    })
    socialMedia.innerHTML = html;
// Cách 4:
links.forEach(ele => {
    socialMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a>`;
})

// Xóa phần tử DOM
// document.body.removeChild(heading);
heading.parentElement.removeChild(heading);

// Thay thế phần tử DOM
const h3 = document.createElement("h3");
h3.innerText = "Đây là thẻ H3";
document.body.replaceChild(h3, para3)

// Sao chép
const boxCoppyTrue = box.cloneNode(true);
const boxCoppyFalse = box.cloneNode(false);
console.log(boxCoppyTrue);
console.log(boxCoppyFalse);
document.body.prepend("beforeend",boxCoppyTrue);