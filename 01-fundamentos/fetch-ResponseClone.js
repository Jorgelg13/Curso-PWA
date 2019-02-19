fetch('https://reqres.in/api/user/1')
.then (resp => {

    resp.clone().json().then(usuario => {
        console.log(usuario.data);
    });

    resp.json().then(usuario => {
        console.log(usuario.data);
    });
});