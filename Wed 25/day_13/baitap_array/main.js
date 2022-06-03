// Bài 1: Tìm số lớn nhất trong mảng.
function findNumber(arr) {
   let biggestNum = arr[0];
   for(let i = 0; i < arr.length ; i++) {
       if(arr[i] > biggestNum) {
         biggestNum = arr[i];
       }
   }
   return biggestNum;
}
console.log(findNumber([4,2,5,6,2,7]));

//Bài 2: Tìm số nhỏ nhất trong mảng 
function findNumber_01(arr) {
    let smallestNum = arr[0];
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] < smallestNum) {
            smallestNum = arr[i];
    }
    }
    return smallestNum;
}
console.log(findNumber_01([4,2,-5,6,2,7]));
// Bài 3:Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function sapXep(arr) {
    let newArr = [];
    for(let i = 0;i < arr.length; i++) {
        newArr.push(arr[i] % 2);
    }
    return newArr;
}
console.log(sapXep([4,2,5,6,2,7]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function coppyString(str) {
    let newString = str.split('');
    for(let i = 1; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("");
}
console.log(coppyString("a"));
// BÀI 5:Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString(str) {
    let newString = str.split('');
    for(let i = 1; i < 10; i++) {
        newString.push(str)
    }
    return newString.join("-");
}
console.log(repeatString("a"));
