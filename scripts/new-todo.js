let dataServices;

document.addEventListener('DOMContentLoaded', () => {
dataServices = new DataServices();

getAllUser();
getAllCategories();

document.getElementById('todoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();

});
});

async function getAllUser() {
    const users = await dataServices.getAll();
    const dropdown = document.getElementById('userDropdown');
    users.forEach(user => {
        const option = document.createElement('option');
        option.textContent = user.name;
        option.value = user.id;
        dropdown.appendChild(option);
    });

   
}

async function getAllCategories() {
    const categories = await dataServices.getCategories();
    const dropdown = document.getElementById('categoryDropdown');
    categories.forEach(categoryObj => {
        const option = document.createElement('option');
        option.textContent = categoryObj.name;
        option.value = categoryObj.id;

        dropdown.appendChild(option);
    });
}
 async function addTodo() {
    const userid = document.getElementById('userDropdown').value;
    const category = document.getElementById('categoryDropdown').value;
    const priority = document.getElementById('priorityDropdown').value;
    const description = document.getElementById('descriptionTextarea').value;
    const deadline = document.getElementById('deadlineInput').value;

    const todoData = {
        userid: userid, 
        category: category, 
        priority: priority,
        description: description,
        deadline: description
    };

    const data = await dataServices.addTodo(todoData);
    alert('Todo added!');
    location.href = "/new-todo.html"
 }