// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

function sortStudent(arr) {
        return arr.sort().reverse();
        // return arr.sort(a,b) => b.localeCompare(a,'vi');
}
console.log(sortStudent(["Nam", "Hoa", "Tuấn"]));


// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
function shuffle(arr){
    return arr.sort(function() {
        return 0.5 - Math.random();
    })
}
console.log(shuffle([1,2,3,4,5]));
console.log(shuffle([1,2,3,4,5]));
// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function symmetricDifference(arr1, arr2) {
    let arr3 = [...arr1,...arr2];
    let newArr = [];
    for(let i = 0; i < arr3.length ;i++) {
        if(arr3.indexOf(arr3[i]) == arr3.lastIndexOf(arr3[i])) {
            newArr.push(arr3[i]);
        }
    }
    return newArr;
    
}
console.log(symmetricDifference([1, 2, 3, 5], [1, 2, 4]));
// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(arr1, arr2) {
    let arr3 = [...arr1,...arr2]
    let newArr = [];
    for(let i = 0; i <= arr3.length; i++) {
        if(newArr.indexOf(arr3[i]) == -1){
            newArr.push(arr3[i])
        }
    }
    return newArr;
}
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))