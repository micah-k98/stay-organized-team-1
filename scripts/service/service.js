class DataServices{
    APIurl = 'http://localhost:8083/api/'
    async getAll(){
        return fetch(this.APIurl + "users")
        .then(response => response.json())
    }
}