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

let list = (".employee-list")

function addNewElementAsLi(){
  return "<script> list.append("<li>", retrieveEmployeeInformation() ,"<li>" </script>")
}
