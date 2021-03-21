const form = document.querySelector(".js-to-do");
const input = document.querySelector(".js-to-do-input");
const list = document.querySelector(".js-to-do-list");

let todos = [];

function addTodo(value) {
    const todo = document.createElement("li");
    todo.className= "todo";
    todo.id = todos.length + 1;
    
    // add delete button
    const delBtn = document.createElement("span");
    delBtn.innerHTML = "❌"
    delBtn.className = "todo_btn";
    delBtn.addEventListener("click", handleDel);
    
    // add text
    const label = document.createElement("label");
    label.innerHTML = value;
    todo.appendChild(label);
    todo.appendChild(delBtn);
    list.appendChild(todo);
    saveTodo(value);
}

function saveTodo(value) {
    const todoObj = {
        id : todos.length + 1,
        value : value
    };
    todos.push(todoObj);
    saveLocalStorage();
}

function saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function handleDel(event) {
    const target = event.target;
    const li = target.parentElement;
    const ul = li.parentElement;
    const todoId = li.id;
    
    ul.removeChild(li);
    todos = todos.filter(function(todo) {
        return todo.id !== parseInt(todoId);
    })
    saveLocalStorage();
}

function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
}

function loadTodos() {
    const loadedTodos = localStorage.getItem("todos");
    if(loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo) {
            addTodo(todo.value);
        });
    }
}

function init() {
    loadTodos();
}

form.addEventListener("submit", handleSubmit);

init();