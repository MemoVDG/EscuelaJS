const VERSION = "v1";

// Los serviceWorkers se "instalan"

// Guardar en cache
// Self es como el this, pero de los serviceWorkers
self.addEventListener('install', event => {
    /*  Pre cache
    */
    event.waitUntil(precache())
})

// Cargar desde cache
self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== 'GET') {
        return;
    }

    event.respondWith(cachedResponse(request));

    /*  Actualizar el cache usando 'catchAndNetwork',
        primero cargamos de cache y luego actualizamos del network
    */

    event.waitUntil(updatedCache(request));
})

async function precache() {
    // Esperamos a que se nos regrese una instancia de cache
    const cache = await caches.open(VERSION);
    /*  Guardamos los datos en el cache
        estos datos los podemos checar en el area de desarrollo en la pestaña de 
        'Aplication' y ahi es donde se debe de activar el service worker, una vez que se guardaorn los reecursos
        de manera correcta se puede verificar que estan guardados en la seccion de 'Cache Storage'
    */

    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4'
    ])
}

async function cachedResponse(request) {
    // Obtenemos los cache
    const cache = await caches.open(VERSION);
    // Verificamos si lo que se esta solicitando ya se encuentra en cache, si no se encuentra va a quedar como 'undefined'
    const response = await cache.match(request);

    // Si es undefined entonces tenemos que buscarlo en la red, porque sino siempre se regresara undefined y nunca se podra obtener el recurso
    return response || fetch(request);
}

async function updatedCache(request) {
    // Obtenemos los cache
    const cache = await caches.open(VERSION);

    // Se obtiene la informacion de la red
    const response = await fetch(request);

    // Se agrega al cache
    return cache.put(request, response)
}
