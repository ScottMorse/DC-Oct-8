const taskForm = document.querySelector('#task-form')
const taskField = document.querySelector('[name=task-name]')
const taskArea = document.querySelector('#task-area')

const localTasks = localStorage.getItem('tasks')

if(localTasks){
    const taskArr = localStorage.getItem('tasks').split('::')
    taskArr.forEach(task => {
        createTask(task,true)
    })
}

var first = true
function createTask(taskName,old){
    const newTask = document.createElement('div')
    newTask.classList.add('task')
    newTask.innerHTML = `
        <h2>${taskName}</h2>
        <label class="task-check-lable">
            <input type="checkbox" name="check-task"/>
            <div class="checkmark"></div>
        </label>
    `
    if(!first){
      newTask.style.borderTop = '2px solid darkslategrey'
    }

    taskArea.appendChild(newTask)

    newTask.childNodes[3].childNodes[1].addEventListener('click',clickTask)

    if(!old){
        if(!localStorage.getItem("tasks")){
            localStorage.setItem("tasks",taskName)
        }
    
        else{
            const old = localStorage.getItem("tasks")
            localStorage.setItem("tasks",old + "::" + taskName)
        }
    }
    first = false
}

function submitTask(e){
    e.preventDefault()
    const taskName = taskField.value
    taskField.value = null
    createTask(taskName,false)
}

function clickTask(){
    parentTask = this.parentNode.parentNode
    curTaskName = parentTask.children[0].innerHTML

    curLocalTasks = localStorage.getItem('tasks')
    let reset = curTaskName + "::"
    if(!curLocalTasks.includes("::")){
        reset = curTaskName
    }
    localStorage.setItem('tasks',curLocalTasks.replace(reset,""))

    parentTask.style.opacity = 0;
    setTimeout(()=>parentTask.style.display = 'none',1000)
}

taskForm.addEventListener('submit',submitTask)