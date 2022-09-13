const todoContainer = document.querySelector(".myUl")
const userInput = document.getElementById("userInput")
const inputBtn = document.getElementById("inputBtn")
let checkInput = document.querySelectorAll("input[type=checkbox]")
let todoCount = 0

inputBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (userInput.value !== "") {
    let newTodo = document.createElement("li")
    newTodo.classList.add("eachTodo")
    newTodo.innerHTML = `
    <div>
      <input type="checkbox" name="" id="taskCheck" />${userInput.value.trim()}
    </div>
    <div>
      <button><i class="fa-solid fa-xmark"></i></button>
    </div>
`
    todoContainer.appendChild(newTodo)
  } else {
    alert("Must enter a task to add !")
  }
  userInput.value = ""
  checkInput = document.querySelectorAll("input[type=checkbox]")
})

checkInput.forEach((liInput) => {
  liInput.addEventListener("change", (e) => {
    console.log(checkInput)

    if (e.currentTarget.checked == true) {
      console.log("Is checked")
    }
  })
})

// setInterval(() => {
//   checkInput = document.querySelectorAll("input[type=checkbox]")
//   console.log(checkInput)
// }, 15000)
