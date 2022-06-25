// Chức năng :

// 1.Thêm công việc
// 2.Lọc công việc theo trạng thái
// 3.Thay đổi trạng thái công việc
// 4.Xóa hoặc sửa đổi những công việc đã hoặc chưa hoàn thành

// Đối tượng trong ứng dụng này là gì? Bao gồm những thuộc tính nào?
// ID, title, stasus.
let todos;
    
// 4 -> 10000
const randomId = () => {
    return Math.floor(Math.random() * (997) + 4);
}
// Truy cập
const todoListEl = document.querySelector(".todo-list");
const todoOptionEls = document.querySelectorAll(".todo-option-item input");
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.querySelector(".btn-update");
const btnChange = document.getElementById("btn-update");
console.log(todoOptionEls)
const renderTodo = arr => {
    todoListEl.innerHTML = "";
    // Kiểm tra danh sách công việc có tróng hay không?
    if(arr.length == 0) {
        todoListEl.innerHTML = `<p class ="todos-empty">Không có công việc nào trong danh sách</p>`;
        return;
    }
    // Hiển thị danh sách:
    let html = "";
    arr.forEach(t => {
        html += `<div class="todo-item ${t.status ? "active-todo" : ""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status ? "checked" : ""}
            onclick="toggleStatus(${t.id})"
            />
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick="updateTodo(${t.id})">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>`
    });
    todoListEl.innerHTML = html;
   

}
 //Xóa công việc
 const deleteTodo = id => {
     // Lọc ra các công việc muốn xóa
    todos = todos.filter(todo => todo.id != id);
    // Hiện thị trên giao diện
    setDataToLocalStorage(todos);

    
}
// Chỉnh sửa công việc

let idUpdate = null;
const updateTodo = function(id) {
    let title
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == id) {
            title = todos[i].title;
        }
    }
    btnChange.style.display = "inline-block";
    btnAdd.style.display = "none";
    todoInputEl.value = title;
    todoInputEl.focus();
    idUpdate = id;
    
}
btnChange.addEventListener("click", function(id) {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id == idUpdate) {
            todos[i].title = todoInputEl.value;
        }
    }
    btnChange.style.display = "none";
    btnAdd.style.display = "inline-block";
    todoInputEl.value = "";
    renderTodo(todos);
    setDataToLocalStorage(todos);
})

// Thay đổi trạng thái công viêc 
const toggleStatus = id => {
    //Lấy ra công việc cần thay đổi
    let todo = todos.find(todo => todo.id == id);
    // Thay đổi trạng thái của công việc đó: true -> false: false -> true;
    todo.status = !todo.status;
    //hiển thị lên trên giao diện
    setDataToLocalStorage(todos);

}
// Lọc công việc theo trạng thái
Array.from(todoOptionEls).forEach(input => {
    input.addEventListener("change", function() {
        let option = input.value;
        let todoFilter = [];
        switch(option) {
            case "all" : {
                todoFilter = [...todos];  // spread operator
                break;
            }
            case "active" : {
            todoFilter = todos.filter(todo => todo.status == true);
            break;
            }
            case "unactive" : {
            todoFilter = todos.filter(todo => todo.status == false);
            break; 
            }
            default : {
                todoFilter = [...todos];  // spread operator
                break;
            }

        }
        renderTodo(todoFilter)
    

    })
})
// Thêm công việc
const addTodo = () => {
    //  Lấy ra dữ liệu trong ô input
let title = todoInputEl.value;
console.log(title);
// Kiểm tra tiêu đề có trống hay không
if(title == "") {
    alert("Tiêu đề không được để trống");
    return;

}
// Tạo công việc mới
let newTodo = {
    id : randomId(),
    title : title,
    status : false
}
// Thêm công việc mới vào mảng để quản lí
todos.push(newTodo);
setDataToLocalStorage(todos);


todoInputEl.value = "";
}
btnAdd.addEventListener("click", () => {
    addTodo();
})
todoInputEl.addEventListener("keydown", (event) => {
    if(event.keyCode == 13) {
        addTodo();
    }
})


// Lấy dữ liệu từ localStorage
const getDataFromLocalStorage = () => {
    let data = localStorage.getItem("todos");
    if(data) {
        todos = JSON.parse(data);
    }
    else {
        todos = [];
    }
    renderTodo(todos);

}
// Lưu dữ liệu vào localStorage

const setDataToLocalStorage = arr => {
    localStorage.setItem("todos", JSON.stringify(arr));
    renderTodo(arr);
}
getDataFromLocalStorage();