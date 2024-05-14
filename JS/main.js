let listTasks = document.getElementById("listTasks");
let inputTask = document.getElementById("inputTask");
let addBtn = document.getElementById("addBtn");

listTasks.innerHTML = localStorage.getItem("data");
addBtn.onclick = function () {
   if ( inputTask.value == "" ) {
      alert("You must write something !!")
   }else {
      listTasks.innerHTML += `
         <li>${inputTask.value}<span>x</span></li>
      `
      inputTask.value = "" ;
      saveData()
   }
}
listTasks.addEventListener("click",function (e) {
   if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked")
      saveData()
   }
   if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove()
      saveData()
   }
},false)
function saveData() {
   localStorage.setItem("data",listTasks.innerHTML)
}