
/*
Khái niệm API là gì?
Application Programing Interface( giao diện lập trình ứng dụng)
Tập hợp các quy tắc mà qua đó cho phép cắc thành phần hoặc ứng dụng tương tác như thế nào

Ví dụ thực tế
Đi ăn nhà hàng
khách hàng :client (front end)
Nhà bếp : server (back end)
Khách hàng --> gọi món --> nhà bếp
Nhà bếp --> nấu món ăn --> khách hàng
Nhân viên : Lấy thực đơn từ khách hàng --> gửi cho nhà bếp
Nà bếp nấu ăn xong --> nhân viên mang món ăn lên cho khách hàng

Cấu trúc như thế nào?
API = http method + URL

http method 
GET : Lấy thông tin : Lấy thông tin từ menu
POST : Tạo : Đặt món
PUT : Cập nhật : Thay đổi món ăn
DELETE : Xóa : Hủy món ăn

URL (danh từ - resouce) users
GET/users --> lấy danh sách tất cả user
GET/users/1 --> Lấy thông tin user có id là 1
GET/users/1/blogs : lấy danh sách tất cả các blog của user có id là 1
GET/users/1/blogs/2 : Lấy thông tin blog có id = 2 của user có id là 1
POST/users --> tạo user mới
{
    name : 
    email :
    ...
}
POST/users/1/blogs --> Tạo blogs mới cho user có id = 1
{
    title :
    content :
    ...
}

PUT/users/1 --> Cập nhật thông tin cho user có id = 1
{
    name :
    email :
    ...
}
DELETE/users/1 --> Xóa user có id = 1

Thực hiện goi API như thế nào
- axios( thư viện bên thứ 3, cần phải nối link vào đẻ thực hiện)(khuyên dùng)
- fetch API (có sãn của JS)
- AJAX ( có trong jQuery, cũng cần nối link)
 Test API như thế nào
 - Postman
 - Extension VScode : REST Client
 - Test trực tiếp trên browser (Chỉ sử dụng được với API GET)
*/

const imageEl = document.getElementById("image");
const btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    try {
        // Gọi API --> https://dog.ceo/api/breeds/image/random
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        console.log(res)
        console.log(res.data.message);
        imageEl.src = res.data.message;
    } catch(error) {
        console.log(error);
    }
})
