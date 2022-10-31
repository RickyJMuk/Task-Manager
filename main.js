const deleteBtns = document.querySelectorAll('.delete')
const taskList = document.querySelector('#tasks')
let form = document.querySelector('form')
let counter = document.querySelector('#count')
let message = document.querySelector('#message')

const countTasks = () => {
    let numberOfTasks =document.querySelectorAll('.task').length

    if (numberOfTasks > 0) {
        message.style.display = 'none'
    } else {
        message.style.display = 'block'
    }

    // if (numberOfTasks === 0) {
    //     let p = document.createElement('p')
    //     p.textContent = 'You do not have any tasks today. Please add some.'
    //     taskList.appendChild(p)
    // }
    counter.textContent = numberOfTasks
}

const deleteTask = (e) => {
    let task = e.target.parentElement
    taskList.removeChild(task)
    countTasks() 
}

const addTask = (e) => {
    e.preventDefault()
    let input = document.querySelector('#new-task').value
    let div = document.createElement('div')
    div.className = 'task'
    let p = document.createElement('p')
    p.textContent = input
    let button = document.createElement('button')
    button.className = 'delete'
    button.textContent = 'Delete'
    button.addEventListener('click', deleteTask)
    div.appendChild(p)
    div.appendChild(button)
    taskList.appendChild(div)
    countTasks()
    form.reset()
}


deleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', deleteTask)
})

form.addEventListener('submit', addTask)
countTasks()