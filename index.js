function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector("input")

function retrieveEmployeeInformation(){
return input.value
}

function addNewElementAsLi(){
  newName = retrieveEmployeeInformation()
  document.querySelector(".employee-list").append("<li>", newName, "</li>")
}

function insideAddnew(){
  addNewElementAsLi(event)
  input = ""
}

function addNewLiOnClick(){
  input.addEventListener("click", insideAddnew(event)
    )
}
