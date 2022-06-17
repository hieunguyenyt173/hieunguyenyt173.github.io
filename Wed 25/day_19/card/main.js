// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
let phoneSupport = document.createElement("li");
let listUl = document.querySelector(".list-unstyled")
phoneSupport.innerText = "24/7 Phone support";
listUl.insertAdjacentElement("beforeend", phoneSupport);

// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

let cards = document.querySelectorAll(".col-md-4");
let row = document.querySelector(".row");
row.innerHTML = "";
row.appendChild(cards[1]);
row.appendChild(cards[0]);

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’

let btnPro = document.querySelector("#pro-plan button");
btnPro.style.backgroundColor = "#0984e3";
btnPro.style.color = "#fff";
btnPro.innerText = "Buy Now";
// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

let storagePro = document.querySelector("#pro-plan .storage-amount");
let storageBasic = document.querySelector("#basic-plan .storage-amount");
storagePro.innerText = storagePro.innerText * 1.25;
storageBasic.innerText = storageBasic.innerText * 1.5;