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
  document.querySelector("input").value = ""
}

function addNewLiOnClick(){
  let inputType = document.querySelector("input[type='submit']")
  inputType.addEventListener("click", insideAddnew(event)
    )
}

function clearEmployeeListOnLinkClick(){
  let clearButton = document.querySelector("a")
  clearButton.addEventListener("click", function(e){
    document.querySelector(".employee-list").value = ""
  })

}
