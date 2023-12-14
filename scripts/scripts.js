let dataServices;
document.addEventListener('DOMContentLoaded', ()=>{
    dataServices = new DataServices

    getAllUsers();
})

async function getAllUsers(){
    let userData = await dataServices.getAll()
    console.table(userData)

    let userId = document.getElementById("userId")
    
    userData.forEach(user =>{
        const option = new Option(user.name);
        userId.appendChild(option);
     })
}