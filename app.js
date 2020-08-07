var  todolist = document.querySelector("#todolist");
var input = document.querySelector("#todoInput");


function addTask() {
   var input_box = document.getElementById("todoInput").value
    if(input_box ==''){
        alert('you must write something');
    } else{
   input_date = document.getElementById("input_date");
   var input_text = document.createTextNode(input_box)
   var newItem = document.createElement("li")
   newItem.appendChild(input_text)
   document.getElementById("todolist").appendChild(newItem)
   input.value ='';
}

};

todolist.onclick = function(data){
   if(data.target.tagName == 'LI'){
        data.target.classList.toggle('checked');
   }
};