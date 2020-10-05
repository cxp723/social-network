const button = document.querySelector('button');
let page = 1;
button.addEventListener('click', () => {
    let promise = getImages(page);
    promise.then((images) => {drowImages(images)});
    page++;
});

let drowImages = (images) => {
    images.forEach(image => {
        let newImage = document.createElement('img');
        newImage.src = image.thumbnail;
        document.querySelector('#images').appendChild(newImage);
    });    
}

const sendButton = document.querySelector('#sendTask');
let taskList = document.querySelector('#tasks');

let addTaskToList = (taskTitle) => {
    let newTask = document.createElement('li');
    newTask.innerHTML = taskTitle;
    taskList.appendChild(newTask);
}
let parseTasks = () => {
    let promise = getTasks();
    promise.then((tasks) => {showTasks(tasks)})
}
let showTasks = (tasks) => {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
        let newTask = document.createElement('li');
        newTask.innerHTML = task.title;
        taskList.appendChild(newTask);
    })
}
sendButton.addEventListener('click', () => {
    let taskText = document.querySelector('#taskTitle').value;
    let promise = createTask (taskText);
    document.querySelector('#taskTitle').value = '';
    promise.then(() => {
        parseTasks();
    });
})

