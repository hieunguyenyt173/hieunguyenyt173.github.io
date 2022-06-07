// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3
const max2Numbers = (arr) => {
  // Sắp xếp array theo chiều giảm dần
  arr.sort((a, b) => {
    return b - a;
  });
  // Dùng vòng for để lấy ra giá trị lớn thứ 2, bỏ qua trường hợp có nhiều số cùng lớn nhất.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) return arr[i + 1];
  }
};
console.log(max2Numbers([2, 1, 3, 4]));
console.log(max2Numbers([2, 1, 4, 3, 4]));

// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
// Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

const getStringHasMaxLength = (arr) => {
  arr.sort((a, b) => {
    return b.length - a.length; // Sắp xếp array theo độ dài giảm dần của các chuỗi trong array
  });
  let newArr = []; // Tạo biến lưu kết quả
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length == arr[0].length) {
      // duyệt mảng và so sánh độ dài các phần tử so với phần tử đầu tiên.nếu bằng thì push thêm vào mảng kết quả
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(getStringHasMaxLength(["aba", "aa", "ad", "c", "vcd"]));
console.log(getStringHasMaxLength(["aba", "aa", "ad", "abcd", "c", "vcd"]));
// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
// Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9
const getRandomElement = (arr) => {
  // Lấy 1 số ngẫu nhiên trong khoảng từ 0 đến arr.length - 1 và lưu vào biến randomNum.
  let randomNum = Math.floor(Math.random() * arr.length);
  // Trả về phần tử ngẫu nhiên từ mảng
  return arr[randomNum];
};
console.log(getRandomElement([3, 7, 9, 11]));

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
// Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]

const similarity = (arr1, arr2) => {
  let newArr = []; // Tạo array rỗng để chứa kết quả
  for (let i = 0; i < arr1.length; i++) {
    // Duyệt qua mảng arr1
    if (arr2.includes(arr1[i])) {
      // Tìm kiếm các phần tử ở arr1 có xuất hiện ở arr2 không,nếu có trả về true,và thêm vào chuỗi kết quả
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};
console.log(similarity([1, 2, 3], [1, 2, 4]));
console.log(similarity([1, 2, 3], [3, 4, 5]));
// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
// Ví dụ:
// getTime("9:20:56", 7) => "9:21:3"

const getTime = (str) => {
    let newArr = str.split();
   
     return newArr;
}
console.log(getTime("9:20:56",0));
// Bài 6 (2 điểm). Cho mảng users như sau:

let users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
//1.
const checkAge = (arr) => {
  return arr.filter((user) => {
    // dùng filer tìm kiếm và trả về các user có age > 25 và isStatus = true
    return user.age > 25 && user.isStatus == true;
  });
};
console.log(checkAge(users));
//2.
const sortAgeUp = (arr) => {
  return arr.sort((a, b) => {
      //Dùng sort sắp xếp độ tuổi các user theo chiều tăng dần và trả về kết quả
    return a.age - b.age;
  });
};
console.log(sortAgeUp(users));
// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])


// Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

const getCountElement = (arr) => {
    let obj = {};
        for(let i = 0; i < arr.length; i++) { // duyệt mảng
            if(obj.hasOwnProperty(arr[i])) { //Kiểm tra arr[i] có trong obj không.
                obj[arr[i]] ++;     // Nếu có thì key = arr[i] va tăng giá trị thêm 1
            }
            else {
                obj[arr[i]] = 1; // Nếu không thì gán giá trị = 1;
            }
        }
    return obj;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));