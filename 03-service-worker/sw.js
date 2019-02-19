// Ciclo de vida del SW

self.addEventListener('install', event =>{
    //normalmente se descargan assets
    //creamos un cache
    console.log('SW: instalando sw');
    const instalacion = new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log('SW: instalaciones terminadas'); 
            self.skipWaiting();
            resolve();
         }, 1000);
    });

    event.waitUntil(instalacion);
});

//cuando el service worker toma el control de la aplicacion

self.addEventListener('activate', event => {
    //borrar caches viejos
    console.log('activo y listo para controlar la aplicacion')
});


//fetch manejo de peticiones HTTP
/*self.addEventListener('fetch', event =>{
    //aqui se pueden aplicar estrategias de cache
    //pero se analiza si vale la pena actualizar 
    console.log('SW:', event.request.url);
    if(event.request.url.includes('https://reqres.in/api/users')){
        const resp = new Response(`{ok: false, mensaje: 'jajajaja'}`);
        event.respondWith(resp);
    }
});*/

//sync es cuanndo se pierde la conexion a internet 
self.addEventListener('sync', event =>{
    console.log('tenemos conexion');
    console.log(event);
    console.log(event.tag);
});


//push manejar las push notifications
self.addEventListener('push', event=>{
    console.log('notificacion recibida');
});

