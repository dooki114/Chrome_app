const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //init todo storage

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); //make everything string
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span); //now li has a child called span
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);

}

function handleToDoSubmit() {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("hello", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach(sayHello); //enumerates the elements in the list
    //parsedToDos.forEach((item) => console.log("this is the turn of", item)) //same as above, but in diff expression
}

function sexy_filter(item) {
    return item !== 3;
}
//[1, 2, 3, 4].filter(sexy_filter) //this will call sexy_filter for each element from the given list.
//this will filter out the element if the sexy_filter returns False
