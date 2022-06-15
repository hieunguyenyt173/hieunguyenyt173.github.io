// Yêu cầu
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
// Thay thế các ký hiệu ? => 🤔, ! => 😲
const para = document.querySelector("p");
// Lấy ra nội dung các từ lớn hơn hoặc bằng 8 kí tự thành mảng
 let text = para.innerText.split(" ");
 let result = text.map(word => word.length >= 8 ? `<span style="background-color: yellow">${word}</span>` : word).join(" ")
 para.innerHTML = result;


 const link = document.createElement("a");
 link.href = "https://www.facebook.com/";
 link.innerText = "facebook";
 document.body.appendChild(link);


 let totalWord = para.innerText.length;
 const divTotal = document.createElement("div");
 divTotal.innerText = totalWord;
 document.body.appendChild(divTotal);


 para.innerHTML = para.innerHTML.replaceAll("?", "🤔");
 para.innerHTML = para.innerHTML.replaceAll("!", "😲");