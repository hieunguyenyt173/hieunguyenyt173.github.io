// Câu 1: Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
const text = document.getElementById("text");
text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Câu 2: Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const ul1 = document.querySelectorAll("li");
Array.from(ul1).forEach(ele => {
    ele.style.color = "blue";
})
// Câu 3: Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
items = [
    {
        title: "Item 8"
    },
    {
        title: "Item 9"
    },
    {
        title: "Item 10"
    }
    
]
const listItem = document.querySelector("#list");
Array.from(items).forEach(ele => {
    const item = document.createElement("li");
    item.innerText = ele.title;
    listItem.appendChild(item);
    item.style.color = "blue";
});
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
listItem.firstElementChild.style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector("#list li:nth-child(3)");
li3.style.backgroundColor = "green";

// Remove thẻ <li> 4
const li4 = document.querySelector("#list li:nth-child(4)");
listItem.removeChild(li4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const liRemove = document.createElement("li");
liRemove.innerText = "item 4 bị xóa comeback";
li3.insertAdjacentElement("afterend", liRemove);

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
const addBtn = document.createElement("button");
const inputBtn = document.createElement("input");
inputBtn.type = "text";
addBtn.innerText = "Add";
document.body.appendChild(addBtn);
document.body.appendChild(inputBtn);
addBtn.addEventListener("click", function() {
    if(!inputBtn.value) {
        alert("Không được bỏ trống");
    }
    else {
        const addli = document.createElement("li");
    addli.innerText = inputBtn.value;
    listItem.appendChild(addli);
    }
    
});

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const removeBtn = document.createElement("button");
removeBtn.innerText = "Remove";
document.body.appendChild(removeBtn);
removeBtn.addEventListener("click", function() {
    listItem.removeChild(listItem.lastChild);
})

// Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

const hideBtn = document.createElement("button");
hideBtn.innerText = "Hide";
document.body.insertBefore(hideBtn, listItem);
hideBtn.addEventListener("click", function() {
    listItem.classList.toggle("hide");
    if(listItem.classList.contains("hide")) {
        hideBtn.innerText = "Show";
    }
    else {
        hideBtn.innerText = "Hide";
    }
})
