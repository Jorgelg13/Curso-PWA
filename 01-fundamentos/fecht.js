//PETICION PARA TRAER USUARIOS
//https://reqres.in/api/user
//https://jsonplaceholder.typicode.com/users

fetch('https://reqres.in/api/user')
  .then(resp => resp.json())
  .then(respObj => {
     console.log(respObj);
     console.log(respObj.page);
     console.log(respObj.per_page);
     console.log(respObj.total_pages);
});