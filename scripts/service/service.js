class DataServices{
    
    APIurl = 'http://localhost:8083/api/'
    
    async getAll(){
        return fetch(this.APIurl + "users")
        .then(response => response.json())
    }

    async userTasks(id) {
        return fetch(`${this.APIurl}todos/byuser/${id}`).then(response => response.json());
    }

    async getCategories() {
        return fetch(this.APIurl + "categories").then(response => response.json());
    }

    async addTodo(todoData) {
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(todoData),
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }

        return fetch(this.APIurl + 'todos', requestInfo).then(response => response.json());

        }
        
    
}