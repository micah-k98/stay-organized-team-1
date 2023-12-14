let dataServices;
let userSelect;
let allTasks, toDoTaskTemplate;

document.addEventListener('DOMContentLoaded', ()=>{
    dataServices = new DataServices

    // Set variables
    allTasks = document.getElementById("allTasks");
    toDoTaskTemplate = document.getElementById("toDoTaskTemplate");
    userSelect = document.getElementById("userId");

    // Register Events
    userSelect.addEventListener("change", getUserTasks);

    getAllUsers();
    

})

async function getAllUsers(){
    let userData = await dataServices.getAll()
    console.table(userData)

    userData.forEach(user =>{
        const option = new Option(user.name, user.id);
        userSelect.appendChild(option);
     })
}

async function getUserTasks(event) {
    event.preventDefault();

    let toDoList = await dataServices.userTasks(userSelect.value);
    allTasks.innerText = "";

    if (toDoList.length != 0) {
        toDoList.forEach(task => {
            displayTask(task);
        })
    }
    else {
        const h5 = document.createElement("h5");
        h5.innerText = "There's no task assigned."
        h5.classList.add("text-center");
        h5.classList.add("mt-3");
        allTasks.appendChild(h5);
    }
}

async function displayTask(task) {
    let card = toDoTaskTemplate.content.cloneNode(true);
    card.getElementById("category").innerText = task.category;
    card.getElementById("priority").innerText = task.priority;
    card.getElementById("desc").innerText = task.description;
    card.getElementById("deadline").innerText = task.deadline;

    allTasks.appendChild(card);
}