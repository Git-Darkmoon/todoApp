const todoContainer = document.querySelector(".myUl")
const userInput = document.getElementById("userInput")
const inputBtn = document.getElementById("inputBtn")

let newTodo = document.createElement("li")
newTodo.classList.add("eachTodo")

inputBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (userInput.value !== "") {
    let newTodo = document.createElement("li")
    newTodo.classList.add("eachTodo")
    newTodo.innerHTML = `
    <div><input type="checkbox" name="" id="">${userInput.value.trim()}</input></div>
    <div><button>X</button></div>
`
    todoContainer.appendChild(newTodo)
  } else {
    alert("Must enter a task to add !")
  }
  userInput.value = ""
})
