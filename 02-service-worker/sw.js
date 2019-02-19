self.addEventListener('fetch',event => {
 //console.log(event);
  /*if(event.request.url.includes('style.css')){
     event.respondWith(null);
 } else{
     
    event.respondWith(fetch(event.request));
 }*/

//---------------------------------------------------------------------
  //console.log(event.request.url);
  //console.log(event.request.url.includes('.css'))
//-----------------------------------------------------------------

//--------------------------------------------------------------------
 /* if(event.request.url.includes('.jpg')){
      console.log(event.request.url);
    
      let foto = fetch('img/main.jpg');
      event.respondWith(foto);
  }*/
//------------------------------------------------------------------------


//----------------------------------------------------------------------
  /* if(event.request.url.includes('style.css')){

      //let respuesta = fetch('css/styles2.css')
      let = respuesta = new Response(`
       body{
           background-color: blue !important;
           color:white;
       }
       `,{
           headers:{
             'Content-Type': 'text/css'  
           }
       });

       event.respondWith(respuesta);
   }*/
//----------------------------------------------------------------------   

//--------------------------mostrar imagen patas arriba------------------------------------------
/*if(event.request.url.includes('main.jpg')){
    let imagen = fetch('img/main-patas-arriba.jpg')
    event.respondWith(imagen);
}*/

 event.respondWith(
   fetch(event.request).then(resp => {
     if(resp.ok){
       return resp;
     } else{
       return fetch('img/main.jpg');
     }
   })
 );
});