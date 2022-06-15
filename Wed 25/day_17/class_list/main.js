const heading = document.getElementById("heading");
// Xem ds class phần tử
console.log(heading.classList);
//Thêm class
heading.classList.add("text-big", "text-center");

// Xóa class
heading.classList.remove("text-big", "text-center");
// Kiểm tra
console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("text-red"));
// Toggle
// Nếu có class --> xóa đi
// Nếu không có class --> thêm vào

// Lặp đi lặp lại 1 công việc sau 1 khoảng thời gian nhất định
// parameter1 : function(cv)
// parameter 2: time(ms)
// setInterval(function() {
//     heading.classList.toggle("text-red");
// },1000)

// Delay 1 khoảng thời gian sau đó mới thực hiện công việc
// setTimeout(function() {
//     heading.classList.toggle("text-red");
// },3000)

// Thực hiện đếm ngược thời gian từ 10s --> 0
// Kết thúc thì hiện ra 1 message
let time = 10;
let interval = setInterval(function() {
    time--;
    document.querySelector(".time").innerText = `${time}`;
    if(time == 0) {
        //Dừng quá trình lặp lại
        clearInterval(interval);
        document.querySelector(".message").classList.remove(".hide");
    }
},1000)