const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("#btn");

taskList();
btn.addEventListener("click", ()=>{
    if (inputBox.value ===''){
        alert("you have add a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value =''; 
    saveData();

});

listContainer.addEventListener("click" , (e)=>{
 if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

 } else if ( e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
});

function saveData () {
    localStorage.setItem("taskData" , listContainer.innerHTML);
}
function taskList() {
    listContainer.innerHTML = localStorage.getItem("taskData");
}
