// Khai báo mảng:
let arrEmpty = [];

// Khai báo mảng sau đó chèn dữ liệu cho mảng:
let names = [];
names[0] = "An";
names[1] = "Hòa";
names[2] = "Tuấn";
console.log(names);

// Vừa khai báo vừa tạo giá trị:
let numbers = [1,2,3,4,5];
console.log(numbers);

// Lấy giá trị của mảng thông qua chỉ số:
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[numbers, numbers.length - 1]); 

// Set lại giá trị:
numbers[0] = 10;
console.log(numbers);
let numberOther = numbers;
console.log(numberOther);
numberOther[2] = 20;
console.log(numbers);
console.log(numberOther);
// Ví dụ:
let arr = [1,2,3];
let arr1 = [1,2,3];
let arr2 = arr1;
let arr3 = arr1.sort().reverse();
let text = "1, 2, 3"

console.log(arr == arr1); // false
console.log(arr == arr2); // false
console.log(arr2 == arr3); // true
console.log(arr == text);  // true
console.log(arr3 == text); // false

// Duyệt mảng:
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Tính tổng:
let total = 0;
for(let i = 0;i < numbers.length; i++) {
    total += numbers[i];
}
console.log(total);
//  TÍnh tổng số lẻ :
let totalOdd = 0;
for(let i = 0;i < numbers.lenth; i++) {
    if(numbers[i] % 2 != 1) {
        totalOdd += number[i];

    }
    
}
console.log(totalOdd);

// Lấy ra mảng số chẵn;
// [10,20,3,4,5]
let newArr = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        newArr.push(numbers[i]);
    }
}
console.log(newArr);

// Bài vi dụ 1:
 function checkArr(arr) {
     for(let i = 0;i <= arr.length - 1; i++) {
         
        if(arr[i] > arr[i + 1]){
            return false;
        }
        
     }
     return true;
     

 }
 console.log(checkArr([1,2,6,8,9]));
 console.log(checkArr([1,5,4,8,9]));

//  Ví dụ 2;
function checkArr1(arr) {
    for(let i = 0;i < arr.length - 1;i++) {
        if(arr[i] % 2 == 0) {
            return checkArr(arr);
        }
    }
    return false;
}
console.log(checkArr1([1,2,6,8,9]));
console.log(checkArr1([2,4,6,8]));