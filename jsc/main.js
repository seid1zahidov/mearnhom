
var todos = [];
let removeBtns = document.getElementsByClassName("delete")
function getValue(id) {
    var value = document.getElementById(`${id}`).value;
    return value;
}
function generateTodo(todovalue) {
    var todo = {
        id: todoId,
        value: todovalue,
    }
    todoId++;
    todos.push(todo)
    return todos;
}
function generateList(todos) {
    var ulinnerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        ulinnerHTML += ` <li id="${todos[i].id}"">
        <span>${todos[i].value}</span>
         <button id="delete-${todos[i].id}"  class="btn delete btn-success">delte</button>
       </li>`
    }
    lis.innerHTML = ulinnerHTML;
    removeToDo();
}
button.addEventListener("click", function (e) {
    let value = getValue("input");
    generateTodo(value)
    generateList(todos)
    console.log(todos)
})
function removeToDo() {
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener("click", function (e) {
            let removeLi = e.target.parentElement.id;
            let li=todos.find(x=>x.id==removeLi)
            let index = todos.indexOf(li)
            console.log(li)
            todos.splice(index,1)
            console.log(todos)
            generateList(todos)
        })
    }
}