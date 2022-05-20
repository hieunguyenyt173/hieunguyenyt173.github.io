# Function và câu lệnh điều kiện
## Function
Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.  
Cú pháp:  
```css
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```
Thực thi function:  
```css
functionName(para_1, ..., para_n)
```
Phân biệt tham số (parameter) và đối số (argument)  
* **Tham số (parameter)** là biến trong khai báo hàm.
* **Đối số (argument)** là giá trị thực của biến này được truyền vào hàm.
## Một số loại function
### 1. Function không có tham số  
```css
function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();
```
### 2. Function có tham số 
 Với function kiểu này có thể có một hoặc nhiều tham số.
```css
// Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Nguyễn Hiếu");

// Ví dụ function có 2 tham số
function sayHello_1(name, city) {
    console.log(`Tôi tên là ${name}, quê tôi ở ${city}`);
}
sayHello_1("Nguyễn Hiếu", "Thanh Hóa");
```
### 3. Function trả về kết quả  
Để trả về kết quả, sử dụng từ khóa ****return**  
```css
function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);
```
Những câu lệnh đằng sau từ khóa return sẽ không được thực thi.  
Ví dụ:  
```css
function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
```
### 4. Function không trả về kết quả  
Đối với function không có từ khóa ****return** thì coi như function đó không trả về kết quả  
## Default Parameter ES6  
Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.
Khi sử dụng chức năng này sẽ giúp function dễ kiểm soát và ít lỗi hơn.  
Ví dụ:  
```css
function sayHello(name = "Lan Lê") {
    console.log(`Xin chào ${name}`);
}

sayHello(); // Lan Lê
sayHello("Long Bùi"); // Long Bùi
```
## Phạm vi của biến (scope)  
Scope có thể hiểu nôm na là “phạm vi sử dụng của biến”  
Có 3 loại scope:  
* Global scope
* Function scope  
* Block scope  
### Global scope  
Một biến được coi là global scope (toàn cục) nếu biến đó được định nghĩa bên ngoài function  
```css
let age = 25;
console.log(age);
```
## Function scope  
Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function  
```css 
function hello() {
    let name = "Long Bùi";
    console.log(name);
}

hello(); // Long Bùi
console.log(name) // Lỗi
```
### Block scope
Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}
```css
{
    let age = 25;
    console.log(age); // 25
}
console.log(age)  // Lỗi
```
**Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền global.**
## Kiểu dữ liệu Boolean
Giá trị của kiểu dữ liệu này chỉ có thể là **true** hoặc **false**  
Ví dụ:  
```css
let a = true;
let b = false;
```
## Xác định giá trị Boolean
Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm ****Boolean()**
## Truthy & Falsy value
**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.  
Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**
* Có 6 giá trị sau được coi là **falsy** : **false, 0, NaN, ‘’, null, undefined**  
* Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**
```css
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false
```
## Câu lệnh điều kiện if - else if - else
### Câu lệnh if
Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.  
```css
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}
```
### Câu lệnh if - else
Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện câu lệnh trong else.  
```css
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}
```
### Câu lệnh if - else if - else
Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai  
```css
// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}
```
## Sự khác biệt giữa == và ===
== và === đều được sử dụng để so sánh  
Tuy nhiên cần chú ý điểm sau khi sử dụng để thực hiện so sánh  
* Toán tử == so sánh trừu tượng, tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)
* Còn toán tử === so sánh nghiêm ngặt,nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)  
## Toán tử 3 ngôi 
Cách viết khác ngắn gọn hơn câu lệnh if-else.  
Cú pháp: 
```css 
condition ? true_value : false_value;
```
Trong đó **condition** là biểu thức điều kiện, **true_value** là giá trị trả về khi điều kiện đúng và **false_value** là giá trị trả về khi điều kiện sai.  
Ví dụ:  
```css
// viết thông thường
let n = 8;
let x;
if (n == 10) {
    x = "Đúng";
}
else {
    x = "Sai";
}
console.log(x)  // Sai
```
Dùng toán tử 3 ngôi:  
```css
let n = 8;
let x;
x = (n == 10) ? "Đúng" : "Sai" ;
console.log(x)  // Sai
```