const nameForm = document.querySelector("#nameForm")
const nameInput = document.querySelector("#nameinput")
const mainBox = document.querySelector("#mainBox")
const clock = document.querySelector("#clock")
const todoInput1 = document.querySelector("#todoinput")
const logoutForm = document.querySelector("#logoutForm")
const logoutButton = document.querySelector("#logoutButton")

const today = new Date();
const hour = String(today.getHours()).padStart(2,0);
const minute = String(today.getMinutes()).padStart(2,0);
const second = String(today.getSeconds()).padStart(2,0);
clock.innerText = `${hour}:${minute}:${second}`


// 3. 시간에 따라서 인사말 달리하기 
const logoutplz = () => {
  localStorage.removeItem("username")
  localStorage.removeItem("toDos")
  location.reload();
}

logoutButton.addEventListener("click", logoutplz)

// 1. 먼저 이름 벨류 값을 받기
function hello(event) {
  
  const username = nameInput.value;
  // 내가 못했던 것!
  localStorage.setItem("username", username)
  // 2. 기존 인풋을 없애고 이름을 화면에 표출
  nameForm.classList.add("hide")
  const nameBox = document.createElement("h2");
  mainBox.appendChild(nameBox);
  // 3번 세부 조건 설정
  if (hour >= 17 || hour < 4) {
   nameBox.innerText = `Good Evening, ${username}`;
  }else if (hour >= 4 && hour < 12) {
    nameBox.innerText = `Good Morning, ${username}`;
   } else {
    nameBox.innerText = `Good Afternoon, ${username}`;
   }
  }

// 4. 시계 만들기

function whatTime() {
  const clock = document.querySelector("#clock")
  const today = new Date();
  const hour = String(today.getHours()).padStart(2,0);
  const minute = String(today.getMinutes()).padStart(2,0);
  const second = String(today.getSeconds()).padStart(2,0);
  clock.innerText = `${hour}:${minute}:${second}`
}

setInterval(whatTime, 1000)

//  5. 내가 잘 못했던 부분 이름 기억하기 브라우저 기본 기능으로 local Storage
// localStorage.setItem!!!

const savedUsername = localStorage.getItem("username")

if (savedUsername === null) {
  logoutButton.classList.add("hide")
  nameForm.classList.remove("hide");
  todoInput1.classList.add("hide")
  nameForm.addEventListener("submit", hello);
  
} else {
  logoutButton.classList.remove("hide")
  todoInput1.classList.remove("hide");
  nameForm.classList.add("hide")
  const nameBox = document.createElement("h2");
  mainBox.appendChild(nameBox);
  logoutForm.classList.remove("hide")
  // 3번 세부 조건 설정
  if (hour >= 17 || hour < 4) {
   nameBox.innerText = `Good Evening, ${savedUsername}`;
  }else if (hour >= 4 && hour < 12) {
    nameBox.innerText = `Good Morning, ${savedUsername}`;
   } else {
    nameBox.innerText = `Good Afternoon, ${savedUsername}`;
   }
}


