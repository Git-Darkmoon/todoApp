const todoContainer = document.querySelector(".myUl")
const userInput = document.getElementById("userInput")
const inputBtn = document.getElementById("inputBtn")
const checkInput = document.querySelectorAll("#taskCheck")

let todoCount = 0

let newTodo = document.createElement("li")
newTodo.classList.add("eachTodo")

inputBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (userInput.value !== "") {
    let newTodo = document.createElement("li")
    newTodo.classList.add("eachTodo")
    newTodo.innerHTML = `
    <input type="checkbox" name="" id="taskCheck" />
    <label for="taskCheck">${userInput.value.trim()}</label>
    <div><button>X</button></div>
`
    todoContainer.appendChild(newTodo)
  } else {
    alert("Must enter a task to add !")
  }
  userInput.value = ""
})

checkInput.forEach((liInput) => {
  liInput.addEventListener("change", (e) => {
    if (e.currentTarget.checked == true) {
      console.log("Cool")
      liInput.nextElementSibling.style.textDecoration =
        "line-through solid #00b32599 35%"
    } else {
      liInput.nextElementSibling.style.textDecoration = "none"
    }
  })
})
