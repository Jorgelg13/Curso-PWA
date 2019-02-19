function sumar(numero) {

    var promesa = new Promise(function(resolve,reject){
        
        console.log(numero);

        if(numero >= 7 ){
            reject('El numero es muy alto')
        }

        setTimeout(function(){
            resolve(numero + 1);
         },800)
    });

    return promesa;
}

sumar(5)
    .then( sumar )
    .then( sumar )
    .then(nuevoNumero =>{
    console.log(nuevoNumero);
})
.catch(error =>{
    console.log('Error en promesa');
    console.log(error);
})