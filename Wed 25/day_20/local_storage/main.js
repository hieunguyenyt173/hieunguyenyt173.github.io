if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}

localStorage.setItem('name', 'Ngô B');
localStorage.setItem('number', '1');
localStorage.setItem('isStatus', 'false');


let numbers = [1,2,3,4,5,6];
let todos = [
    {
        id: 1,
        title : "Đi chơi",
        status : true
    },{
        id: 2,
        title : "Làm bài tập",
        status : true
    },{
        id: 3,
        title : "Đi đá bóng",
        status : false
    }
];
localStorage.setItem("numbers", JSON.stringify(numbers));
localStorage.setItem("todos", JSON.stringify(todos));


// Chuỗi JSON
// Object -> JSON : JSON.stringify();
// JSON -> Object : JSON.parse();

// lấy dữ liệu ra
console.log(numbers);
console.log(todos);


console.log(JSON.parse(localStorage.getItem("numbers")));
console.log(JSON.parse(localStorage.getItem("todos")));
