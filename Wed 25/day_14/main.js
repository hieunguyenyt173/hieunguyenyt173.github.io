// 1.Function expression
// Function có thể gán cho biến
// Regular function
function sum(a, b) {
    return a + b;
}

// Anonymous function : Function không có tên
const sum1 = function(a, b) {
    return a + b;
}
console.log(sum1(3,4));
// Higher Oder function(HOF)
// Truyền vào làm tham số cho function khác
const filterNumber = function(arr, func) {
    newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
let datal = filterNumber([1,2,3,4,5,6], function(ele) {
    return ele % 2 == 1;
})
console.log(datal);



// Có thể được trả về từ function khác.
const sum2 = function(a, b) {
    return function(c) {
        return a + b + c;
    }
}
let func = sum2(10, 20);
console.log(func);
let data = func(30);
console.log(data);
// let data =sum2(10,20)(30);
// Arrow function
const sum3 = (a, b) => {
    return a + b;

}
// Chỉ có 1 câu lệnh
// const sum3 = (a,b) => a + b;
 
//    ForEach :
// Khai báo mảng các số
let numbers = [1, 2, 3, 4, 5, 6]

// In ra các phần tử của mảng
numbers.forEach(ele => {
    console.log(ele);
})

// numbers.forEach(function(value, index) {
//     console.log(value)
// })
// Tính tổng:
let total = 0;
numbers.forEach((value) => {
    return total += value;
})
console.log(total)

// In ra các giá trị số lẻ;
numbers.forEach((value) => {
    if(value % 2 == 0) {
        return;
    }
    console.log(value);
})

// ************for...of***********
let number = [1, 2, 3, 4, 5, 6]

// In ra các giá trị của mảng
for (const value of number) {
    console.log(value);
}

// Spread operator - ES6
let numbers1 = [1, 4, 11, 6, 2, 4, 7, 0]
console.log(Math.max(1, 4, 11, 6, 2, 4, 7, 0)) // 11
console.log(Math.max(...numbers1)) // 11

let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2]
console.log(a3)

// coppy
let numbersCoppy = numbers.slice();
let numbersCoppy1 = [...number];

numbersCoppy.push(100);
numbersCoppy1.pop();
console.log(numbers)
console.log(numbersCoppy)
console.log(numbersCoppy1)



