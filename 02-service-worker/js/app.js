//confirmacion de uso del service worker
if(navigator.serviceWorker){
    //console.log('podemos usar el servicie worker');
    navigator.serviceWorker.register('/sw.js');
}

