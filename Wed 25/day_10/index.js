// Khai báo kiểu boolean
let a = true ;
let b = false;
console.log(a);
console.log(b);
console.log(!a);
console.log(!b);

// Hàm boolean
console.log(Boolean(10));
console.log(Boolean(10 > 5));
console.log(Boolean(5 > 10));

// Falsy value
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(false));
 
// Một số toán tử !, || , &&
// &&
console.log("Toán tử điều kiện");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// ||
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

// Câu lệnh if: Nếu ...thì...
// let hour = 6;
// if(hour < 10) {
//     console.log("Good morning");
// }
let coTienmat = false;
let coTaiKhoan = true;
if(coTienmat || coTaiKhoan){
    console.log("đi chơi")
}

// Câu lệnh if..else : Nếu ... thì ...
let troiDep = true;
if(troiDep == true){
    console.log("Đi chơi")
} 
else {
    console.log("Ở nhà")
}

// VD nếu có 30 triệu trở lên thì mua IP 13pro max, ngược lại thì mua SS S21 Untra
let money = 25;
if(money >= 30) {
    console.log("Mua IP 13 Pro Max")
}
else {
    console.log("Mua Ss S21 Untra")
}

// Câu lệnh if ... else if ...else :
// VD: nếu có 30 triệu trở lên thì mua IP 13pro max,
// nếu có 20 - 30 triệu thì mua samsung s21
// nếu có 15- 20 triệu mua oppo find x3
// nếu có 15 triệu trở xuống để đi nhậu cho khỏe :))
let haveMoney = 7;
if(money >= 30) {
    console.log("Mua Ip 13 pro max")
}
else if(haveMoney >= 20 && haveMoney < 30)
{
    console.log ("Mua samsung s21");
}
else if(haveMoney >= 15 && haveMoney < 20)
{
    console.log ("Mua oppo find x3");
}
else {
    console.log("Để tiền đi nhậu")
}

// If else lồng nhau
// VD kiểm tra 1 số là số nguyên âm, nguyên dương, hay là số 0.
// Nếu là số nguyên dương thì là chẵn hay lẻ
let number = 32;
if(number > 0){
    console.log("Số nguyên dương")
    if(number % 2 == 0){
        console.log("Số chẵn")
    }
    else{
        console.log("Số lẻ")
    }
}
else if(number == 0){
    console.log("Số 0")
}
else {
    console.log("Số nguyên âm")
}
// Toán tử 3 ngôi
let hour = 6;
 if(hour < 10) {
     console.log("Good morning");
 }
 hour < 12 
 ? console.log("Good morning") 
 : console.log("Good afternoon");
// Bài  tập if-else:
// Bài 1: