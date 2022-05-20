// Định nghĩa function
function sayHello() {
    console.log("Xin chào các bạn");
}
sayHello();
function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`);
}
sayHelloWithName("Hiếu");
sayHelloWithName("Nguyễn Văn A");
function showInfo(name, address){
    console.log(`Xin chào tôi tên là ${name}, Hiện tại tôi đang ở ${address}`);
}
showInfo("Hiếu", "Ao Sen");


// Function có trả về kết quả  
// VD tính tổng 2 số
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 4));

function sum(a, b) {
    let result = a + b;
    return result;
}
let data = sum(3, 4);
console.log(data);
console.log(sum(10,4));
console.log(sum(data, 10));

// Default parameter
function sum1(a = 10, b = 20) {
    let result = a + b;
    return result;
}
console.log(sum1(3));
console.log(sum1());
console.log(sum(5, 6));

// Bài tập function

// Bài 1:
function sayHello() {
    console.log("Xin chào các bạn")
}
sayHello();

// Bài 2:
function sayHello1(name) {
    console.log(`Xin chào bạn ${name}`);
}
sayHello1("Hiếu");

// Bài 3:
function sayHello2(name1) {
    console.log(`Xin chào bạn " ${name1} " `);
}
sayHello2("Hiếu");

// Bài 5:
function pow1(a) {
   let result1 = a * a ;
    return result1;
}
console.log(pow1(2));
console.log(pow1(5));

// Bài 6:
function count(c) {
    let century = Math.ceil(c / 100);
    return century;

}
console.log(count(1998));
console.log(count(2002));
console.log(count(3002))

// Biến định nghĩa bên ngoài function
let name = "Nguyễn Văn A";

// 