function sumar(numero, callback) {

    setTimeout(function(){
       callback(numero +10);
    },800)
}

sumar(5, function(nuevoValor){
   // console.log(nuevoValor);
   sumar(nuevoValor,function(valor2){
       console.log(valor2);
   })
});

//console.log(sumar(10));