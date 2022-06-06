// Khai báo object
let emptyObj = {};

// Khai báo ojb có giá trị
let student = {
    id : 1,
    name : "Nguyễn Văn A",
    email : "a@gmail.com",
    status : false,
    address : {
        city : "Hà Nội",
        district : "Thanh Xuân"
    },
    gotoSchool : function() {
        console.log("Đi học")
    },
    showInfo : function() {
        console.log(`Name : ${this.name} , email : ${this.email} , address : ${this.address}`)
    }
}

// Lấy ra thông tin
console.log(student.email);
console.log(student.address.city);
//  Set lại thông tin:
student.email = "Nguyenvana@gmail.com";
student.address.district = "Đống Đa";
console.log(student.email)

// Thêm thuộc tính:
student.point = "9";

// Xóa thuộc tính:
delete student.status;
console.log(student);

// Gọi phương thức:
student.gotoSchool();
student.showInfo();

// Phương thức:

// 1.lấy danh sách key:
console.log(Object.keys(student));
let keys = Object.keys(student);
// Duyệt keys để in ra value tương ứng
keys.forEach(key => {
    console.log(student[key]);
});
// Sử dụng for...in
for(const key in student) {
    console.log(student[keys]);
}
// lấy danh sách value: => Trả về mảng:
console.log(Object.values(student));

// kiểm tra 1 key có tồn tại trong object hay không?
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("age"));
