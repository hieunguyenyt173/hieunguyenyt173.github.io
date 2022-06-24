// Công việc 3 : Giả sử sau 3s thì thực hiện xong
function funcC() {
    setTimeout(function () {
        console.log("three");
    }, 3000)
}

// Công việc 4 : Giả sử sau 4s thì thực hiện xong
function funcD() {
    setTimeout(function () {
        console.log("four");
    }, 4000)
}

// Tổng thời gian thực hiện hết 2 cv3 và cv4 là 4s
// Thực hiện công việc
funcC();
funcD();
