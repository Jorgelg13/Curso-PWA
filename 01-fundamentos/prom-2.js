function sumar(numero) {

    var promesa = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(numero + 1);
         },800)
    });

    return promesa;
}

sumar(1).then( nuevoNumero => {
    console.log(nuevoNumero);
    return sumar(nuevoNumero);
})
.then(nuevoNumero =>{
    console.log(nuevoNumero);
    return sumar(nuevoNumero);
})
.then(nuevoNumero =>{
    console.log(nuevoNumero);
});