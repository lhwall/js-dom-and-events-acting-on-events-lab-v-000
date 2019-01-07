function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
let input = document.querySelector("input")
return input.addEventListener("click", function(e){
  return input.innerHTML
})
}
