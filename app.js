function addTask() {
   var input_box = document.getElementById("todoInput").value
   var input_text = document.createTextNode(input_box)
   var newItem = document.createElement("li")
   newItem.appendChild(input_text)
   document.getElementById("todolist").appendChild(newItem)
}
