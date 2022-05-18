console.log('Hello everybody')
// Khai bao bien
let name;
console.log(name);
name = 'Nguyen Hieu'
console.log(name);
firstName = 'Nguyễn';
lastName = 'Hiếu'
let age = 25;
// Vừa khai báo, vừa khởi tạo
let email = "hieunguyenyt173@gmail.com"
let number = 10;
let isStatus = true;

// Kiểu dữ liệu nguyên thủy (primary type)
// undefined, string, number, boolean,...

// Khai báo hằng số
const Pi = 4;
console.log(Pi)
// Kiểm tra kiểu dữ liệu
console.log(typeof name)
console.log(typeof isStatus)

// Chuỗi
let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";
console.log(message)

// Cộng chuỗi
let fullName  = firstName + ' ' + lastName;
console.log(fullName)

// Template String
// Có sử dụng
console.log(`Xin chào các bạn mình tên là ${fullName}.Mình sinh năm ${2022 - age}`)

// Không sử dụng
console.log('Xin chào các bạn mình tên là' +' ' + fullName + '.Mình sinh năm' + ' ' + (2022-age));

// Hiển thị nhiều dòng
console.log(`
Dòng 1
Dòng 2
Dòng 3
`);
// Math object
console.log(Math.PI);

// Lấy số ngẫu nhiên từ 1-100
Math.floor(Math.random() *100 + 1);

// Lấy số ngẫu nhiên 50-100
Math.floor(Math.random() *(100 - 50 + 1) + 50);