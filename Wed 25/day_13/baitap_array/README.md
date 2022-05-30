# STRING METHOD
## String Length
Thuộc tính length trả về độ dài của một chuỗi:  
Ví dụ:  
```css
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
```
## String split()
* Phương thức split () chia một chuỗi thành một mảng các chuỗi con. 

* Phương thức split () trả về mảng mới.  
* Phương thức split () không thay đổi chuỗi gốc.  
* Nếu (" ") được sử dụng làm dấu phân tách, chuỗi được phân tách giữa các từ.  
* Cú pháp: string.split(separator, limit)
```css
let text = "How are you doing today?";
const myArray = text.split(" ");  // How,are,you,doing,today?
```
## String indexOf()
* Phương thức indexOf () trả về vị trí xuất hiện đầu tiên của một giá trị trong một chuỗi.

* Phương thức indexOf () trả về -1 nếu giá trị không được tìm thấy.

* Phương thức indexOf () phân biệt chữ hoa chữ thường.
* Cú pháp: string.indexOf(searchvalue, start)
```css
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");  // 13 

let text = "Hello world, welcome to the universe.";
text.indexOf("e", 5);  // 14
```
## String lastIndexOf()
* Phương thức lastIndexOf () trả về chỉ số (vị trí) của lần xuất hiện cuối cùng của một giá trị được chỉ định trong một chuỗi.

* Phương thức lastIndexOf () tìm kiếm chuỗi từ cuối đến đầu.

* Phương thức lastIndexOf () trả về chỉ mục từ đầu (vị trí 0).

* Phương thức lastIndexOf () trả về -1 nếu giá trị không được tìm thấy.

* Phương thức lastIndexOf () phân biệt chữ hoa chữ thường.
* Cú pháp: string.lastIndexOf(searchvalue, start)
```css
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");  // 36
```
## String includes()
* Phương thức include () trả về true nếu một chuỗi chứa một chuỗi được chỉ định.

* Nếu không, nó trả về false.

* Phương thức include () phân biệt chữ hoa chữ thường.
* Cú pháp: string.includes(searchvalue, start)
```css
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");  //true
```
## startsWith()
* Phương thức startedWith () trả về true nếu một chuỗi bắt đầu bằng một chuỗi được chỉ định.

* Nếu không, nó trả về false.

* Phương thức startedWith () phân biệt chữ hoa chữ thường.

* Cú pháp: string.startsWith(searchValue, start) 
```css
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");  //true
```
## endsWith()
* Phương thức endWith () trả về true nếu một chuỗi kết thúc bằng một chuỗi được chỉ định.

* Nếu không, nó trả về false.

* Phương thức endWith () phân biệt chữ hoa chữ thường.
* Cú pháp: string.endsWith(searchvalue, length)\
```css
let text = "Hello world";
let result = text.endsWith("world");  //true
```
## slice()
* Phương thức slice () trích xuất một phần của chuỗi.

* Phương thức slice () trả về phần được trích xuất trong một chuỗi mới.

* Phương thức slice () không thay đổi chuỗi gốc.

* Các tham số bắt đầu và kết thúc chỉ định phần của chuỗi để trích xuất.

* Vị trí đầu tiên là 0, vị trí thứ hai là 1, ...

* Một số âm được chọn từ cuối chuỗi.
* Cú pháp: string.slice(start, end)
```css
let text = "Hello world!";
let result = text.slice(0, 5);  // Hello
```
## substring()
* Phương thức substring () trích xuất các ký tự, giữa hai chỉ số (vị trí), từ một chuỗi và trả về chuỗi con.

* Phương thức substring () trích xuất các ký tự từ đầu đến cuối (loại trừ).

* Phương thức substring () không thay đổi chuỗi ban đầu.

* Nếu bắt đầu lớn hơn kết thúc, các đối số được hoán đổi: (4, 1) = (1, 4).

* Giá trị bắt đầu hoặc giá trị kết thúc nhỏ hơn 0, được coi là 0.* 
* Cú pháp: string.substring(start, end)
```css
let text = "Hello world!";
let result = text.substring(1, 4);  // ell
```
## substr()
* Phương thức substr () trích xuất một phần của chuỗi.

* Phương thức substr () bắt đầu tại một vị trí được chỉ định và trả về một số ký tự được chỉ định.

* Phương thức substr () không thay đổi chuỗi ban đầu.
* Cú pháp: string.substr(start, length)
```css
let text = "Hello world!";
let result = text.substr(1, 4);"  // ell
```
## concat()
* Phương thức concat () nối hai hoặc nhiều chuỗi.
* Phương thức concat () trả về một chuỗi mới.
* Cú pháp: string.concat(string1, string2, ..., stringX)
```css
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);  //seafood
```
## toLowerCase, toUpperCase
* Phương thức toLocaleLowerCase () chuyển đổi một chuỗi thành chữ thường, sử dụng ngôn ngữ hiện tại.
*  Phương thức toLocaleUpperCase () chuyển đổi một chuỗi thành chữ hoa, sử dụng ngôn ngữ hiện tại.
```css
let text = "Hello World!";
let result = text.toLocaleUpperCase();  // HELLO WORLD!

let text = "Hello World!";
let result = text.toLocaleLowerCase();  // hello world!
```
## replace()
* Phương thức Replace () tìm kiếm một chuỗi cho một giá trị hoặc một biểu thức chính quy.

* Phương thức Replace () trả về một chuỗi mới với (các) giá trị được thay thế.
* Cú pháp: string.replace(searchValue, newValue)
```css
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools") //Visit W3Schools!

let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red"); // Mr Blue has a red house and a red car.
```
## charAt() 
* The charAt() method returns the character at a specified index (position) in a string.
* Cú pháp: string.charAt(index)
```css
let text = "HELLO WORLD";
let letter = text.charAt(0);  //H
```
## trim()
* Phương thức trim () loại bỏ khoảng trắng từ cả hai bên của một chuỗi.
* Cú pháp: string.trim()
```css
let text = "       Hello World!        ";
let result = text.trim();  // Hello World!
```
# ARRAY METHOD
## push()
* Thêm các phần tử mới vào cuối một mảng và trả về độ dài mới.
* Cú pháp: array.push(item1, item2, ..., itemX)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");  // Banana,Orange,Apple,Mango,Kiwi
```
## pop()
* Loại bỏ phần tử cuối cùng của một mảng và trả về phần tử đó
* Cú pháp: array.pop()
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();  // Banana,Orange,Apple
```
## shift()
* Loại bỏ phần tử đầu tiên của một mảng và trả về phần tử đó.
* Cú pháp: array.shift()
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();  // Orange,Apple,Mango
```
## unshift()
* Thêm các phần tử mới vào đầu mảng và trả về độ dài mới.
* Cú pháp: array.unshift(item1, item2, ..., itemX)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");  // Lemon,Pineapple,Banana,Orange,Apple,Mango
```
## slice()
* Chọn một phần của mảng và trả về mảng mới.
* Cú pháp: array.slice(start, end)
```css
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // Orange,Lemon
```
## concat()
* Nối hai hoặc nhiều mảng và trả về bản sao của các mảng đã nối.
* Cú pháp: array1.concat(array2, array3, ..., arrayX)
```css
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);  // Cecilie,Lone,Emil,Tobias,Linus
```
## reverse()
* Đảo ngược thứ tự của các phần tử trong một mảng.
* Cú pháp: array.reverse()
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse(); // Mango,Apple,Orange,Banana
```
## join()
* Nối tất cả các phần tử của một mảng thành một chuỗi.
* Cú pháp: array.join(separator)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(); // Banana,Orange,Apple,Mango
```
## toString() 
* Chuyển đổi một mảng thành một chuỗi và trả về kết quả.
* Cú pháp: array.toString()
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString(); // Banana,Orange,Apple,Mango
```
## sort()
* Sắp xếp () sắp xếp các phần tử của một mảng.
* Hàm sort () sắp xếp các phần tử dưới dạng chuỗi theo thứ tự bảng chữ cái và tăng dần.
* Cú pháp: array.sort(compareFunction)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();  // Apple,Banana,Mango,Orange
```
## indexOf() 
* Tìm kiếm một phần tử trong mảng và trả về vị trí của nó.
* Cú pháp: array.indexOf(item, start) 
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");  // 2
```
## includes()
* Kiểm tra xem một mảng có chứa phần tử được chỉ định hay không.
* Phương thức include () trả về true nếu một mảng chứa một giá trị được chỉ định,trả về giá trị false nếu không tìm thấy giá trị.
* Cú pháp:  array.includes(element, start)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); //true
```
## splice()
* Thêm / Xóa các phần tử khỏi một mảng.
* Cú pháp: array.splice(index, howmany, item1, ....., itemX)
```css
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
```
