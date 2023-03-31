const todoInput = document.querySelector("#todoinput")
const todoList = document.querySelector("#todolist")
const todoForm = document.querySelector("#todoform")

let todos = [];

// 6. 먼저 넣어줄 곳을 만들고 함수를 만들고
//  7. 삭제 버튼을 누른다.
// 8. todo를 저장한다.

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(todos));
}

function deleteButton(event) {
  const li = event.target.parentElement;
  console.log(todos)
  event.target.parentElement.remove();
  todos = todos.filter((data) => parseInt(data.id) !== parseInt(li.id))
 
  console.log(li.id)
  saveTodos();
}

function paintTodos(newtodo) {
  const list = document.createElement("li");
  list.id = newtodo.id
  const listSpan = document.createElement("span");
  listSpan.innerText = newtodo.text;
  const button = document.createElement("button");
  button.addEventListener("click", deleteButton);
  button.innerText = "❌";
  todoList.appendChild(list);
  list.appendChild(listSpan);
  list.appendChild(button);
}

function addList(event) {
  event.preventDefault();
  const newList = todoInput.value;
  todoInput.value = "";
  const newListObj = {
    text: newList,
    id: Date.now(),
  };
  todos.push(newListObj);
  paintTodos(newListObj);
  saveTodos();
}

todoForm.addEventListener("submit", addList)

//  리콜하는 부분 
const savedToDos = localStorage.getItem("toDos")

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 위에서 빈값을 주는대신 parsedtodos에 보관을 해준다.
  todos = parsedToDos;
  parsedToDos.forEach(paintTodos);
}