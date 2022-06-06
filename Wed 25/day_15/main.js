// Map

function modulo_01(array) {
    let result = array.map(ele => ele % 2);
    return result;
}
console.log(modulo_01([1,2,3,4,5]))

// Filter()

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

const getElementGreater = (arr,number) => {
    let result = arr.filter(ele => ele > number);
    return result;
}
console.log(getElementGreater([1,2,3,4,5], 3));

// Find()

// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// findIndex()
// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5
function getNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// some()
// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false

// every()
// Kiểm tra xem tất cả giá trị trong mảng có lớn hơn 10 không?

function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false

// Reduce()

// Ví dụ: Tính tổng các giá trị của mảng
// Sử dụng reduce
function sum(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 0);

    return sum
}