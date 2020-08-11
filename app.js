var  todolist = document.querySelector("#todolist");
var input = document.querySelector("#todoInput");

function addTask() {
   var input_box = document.getElementById("todoInput").value
    if(input_box ===''){
   
        alert('you must write something');
        return    
    } 
   var input_text = document.createTextNode(input_box)
   var newItem = document.createElement("li")
   newItem.appendChild(input_text)
   // document.getElementById("todolist").appendChild(newItem)
    todolist.appendChild(newItem)
    todolist.insertBefore(newItem, todolist.firstChild);
   input.value ='';

   };
   
   
   todolist.onclick = function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
  }
  



todolist.onclick = function(data){
    if(data.target.tagName == 'LI'){
        console.log("target",data);
        console.log(data.target.parent);
        data.target.classList.toggle('checked');
      //   todolist.innerHTML = "Paragraph changed!";
   
}
};


