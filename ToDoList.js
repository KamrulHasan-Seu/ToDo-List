
var task =[];
//var completedTask =[];
function displayItem(){
  let list="";
  for(let i=0;i<task.length;i++){
    list += `<li><input type="checkbox" onClick="markCompleted(${i})" ${task[i].completed?"checked": ""} > <span style="text-decoration:${task[i].completed?"line-through" :"none"}" >${task[i].text}</span> <button id="editButton" onclick="editItem(${i})">Edit</button> <button id="deleteButton" onclick="deleteItem(${i})">Delete</button> </input><li>`;
  
  }
  document.getElementById("list").innerHTML = list;
}

/*
function filteredDisplayItem(){
  let list="";
  for(let i=0;i<completedTask.length;i++){
    list += `<li><input type="checkbox"> ${completedTask[i]} <button id="editButton" onclick="editItem(${i})">Edit</button> <button id="deleteButton" onclick="deleteItem(${i})">Delete</button> </input><li>`;
  
  }
  document.getElementById("list").innerHTML = list;
}*/

function adItem(){
  
  let input = document.getElementById("inputField").value;
  if(input === '') return;
  task.push({text: input, completed: false});
  console.log(task);
  document.getElementById("inputField").value = "";
  displayItem();
  cntItem();
}
function deleteItem(index){
  task.splice(index,1);
  displayItem();
  cntItem();
}
document.getElementById("inputField").addEventListener("keydown", function(event) {
  if (event.code === "Enter" || event.keyCode === 13) {
    adItem();
    event.preventDefault();
  }
});

function cntItem(){
document.getElementById("taskcnt").innerHTML=task.length;
}

function editItem(index){
  document.getElementById("inputField").value = task[index];
 task.splice(index,1);
 displayItem();
 cntItem();
};

// Filter button active state
var filterButtons = document.querySelectorAll(".filter button");
console.log(filterButtons);
for(let i=0;i<filterButtons.length;i++){
filterButtons[i].addEventListener("click", function(){
var currentActive = document.querySelector(".active");
if(currentActive){
  currentActive.classList.remove("active");
}
this.classList.add("active");
})
};

function allFilter(){
  displayItem();
}

function markCompleted(index){
  let itemStatus = document.querySelectorAll("li input[type='checkbox']")[index];
 if(itemStatus.checked){
    task[index].completed = true;
    task.length--;
    cntItem();
  let span = document.querySelectorAll("li span")[index];
  span.style.textDecoration = "line-through";
 }
}

function completedFilter(){
  let list ="";
  let count=1;
  for(let i=0;i<task.length;i++){
    if(task[i].completed){
     
      list+=`<li>  ${count}. <span ${task[i].completed?"line-through" :"none"} >${task[i].text}
      </span><li>`;
      count++;
    }
  }
document.getElementById("list").innerHTML = list;
}