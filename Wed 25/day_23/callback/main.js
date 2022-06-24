// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function finish() {
    console.log("Kết thúc công việc");
}

// // Thực hiện công việc tuần tự
// doTask1("Làm bài tập", function () {
//     doTask2("Đá bóng", function () {
//         doTask3("Nấu cơm", finish);
//     });
// });

// Thực hiện đồng thời các công việc
doTask1("Làm bài tập", function () {
    console.log("Làm bài tập xong");
})

doTask2("Đá bóng", function () {
    console.log("Đá bóng xong");
})

doTask3("Nấu cơm", function () {
    console.log("Nấu cơm xong");
})

// Nếu nhiều công việc => Dẫn đến tình trạng callback hell
// Để khắc phục tình trạng callback hell => Dẫn đến sự ra đời của promise (ES6)

