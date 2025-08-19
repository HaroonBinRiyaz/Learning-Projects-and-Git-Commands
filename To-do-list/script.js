const inputEl = document.getElementById('inputbox')
const button = document.getElementById('add-btn')
let tasks = document.getElementById("tasks")

button.addEventListener('click',  function(e){
  const inputValue = inputEl.value;
  
  if (inputValue == ""){
    alert("Enter a Task ✏️")
  }
  else{
    addToTasks(inputValue);
    inputEl.value = '';
  }

})

inputEl.addEventListener("keydown", function(e){
  if (e.key === "Enter") { // detect Enter key
    const inputValue = inputEl.value;

    if (inputValue == ""){
      alert("Enter a Task ✏️");
    }
    else {
      addToTasks(inputValue);
      inputEl.value = '';
    }
  }
});




function addToTasks(inputValue){
  const taskDiv = document.createElement("div");
  taskDiv.style.display = "flex";
  taskDiv.style.alignItems = "center";
  taskDiv.style.gap = "8px";
  

  

  const p = document.createElement("p");
  p.textContent = inputValue;
  p.style.flex = "1";

  
  

  const checkBtn = document.createElement("span");
  checkBtn.textContent = "✔";
  checkBtn.style.cursor = "pointer";
  checkBtn.addEventListener("click", () => {
    if (p.style.textDecoration === "line-through") {
    p.style.textDecoration = "none";
    p.style.color = "#000"; // or original color
    checkBtn.style.color = "rgb(5, 114, 102)"
  } else {
    p.style.textDecoration = "line-through";
    p.style.color = "#888";
    checkBtn.style.color = "grey";
  }
    
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener("click", () =>{
    taskDiv.remove();
  } )
  taskDiv.appendChild(p);
  taskDiv.appendChild(checkBtn);
  taskDiv.appendChild(deleteBtn);
  tasks.appendChild(taskDiv);

}