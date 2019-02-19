//PETICION PARA TRAER USUARIOS
//https://reqres.in/api/user
//https://jsonplaceholder.typicode.com/users


let usuario ={
    nombre: 'Jorge',
    edad: 28
};

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers:{
        'Content-Type':'application/json'
    }
})
.then(resp=> resp.json())
.then(console.log)
.catch(error =>{
    console.log('error en peticion');
    console.log(error);
})