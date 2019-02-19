fetch('https://reqres.in/api/user/1000')
.then (resp => {

    if(resp.ok ){
        return resp.json()
    } else{
       // console.log('no existe el usuario 1000')
       throw new Error('NO EXISTE EL USUARIO 1000')
    }

    }).then(console.log)
    .catch(error =>{
        console.log('error en la peticion');
        console.log(error);
    });