const taskContainer =document.getElementById('task-Container');
const inputTask=document.getElementById('input-task');

function addTask (){
    if(inputTask.value===''){
        alert('please enter a task!')
    }
    else{
        const li=document.createElement('li');
        li.innerHTML=inputTask.value;  
        taskContainer.appendChild(li);
        const span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputTask.value='';
    dataStorage()
}
taskContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        dataStorage()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        dataStorage()
    }
}, false);
 function dataStorage(){
    localStorage.setItem("tasks", taskContainer.innerHTML);
 }
 function showTask(){
    taskContainer.innerHTML=localStorage.getItem('tasks');
 }
 showTask();

