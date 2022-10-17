import store from "./store.js";
import {addCount, subtractCount} from './actions/couter.js'
console.log(store)

const counterEl  = document.getElementById('counter')
const btnAdd  = document.getElementById('btn-add')
const btnSubtract  = document.getElementById('btn-subtract')
const todoListEl = document.getElementById("todo-list")
btnAdd.addEventListener("click", () => {
    store.dispatch(addCount);
})
btnSubtract.addEventListener("click", () => {
    store.dispatch(subtractCount);
})



const renderTodo = arr => {
    todoListEl = "";
    let html = "";
    arr.forEach(todo => {
    return `<li>${todo.title}</li>`
    })
}