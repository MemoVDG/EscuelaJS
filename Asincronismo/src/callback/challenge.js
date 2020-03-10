let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest
    // Tipo de request, URL, Si se maneja de manera asincrona
    xhttp.open('GET', url_api, true)

    xhttp.onreadystatechange = function (event) {
        /*  Verificamos en que estado esta
            Pagina para checar listado de estados:
            https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        */
        if (xhttp.readyState === 4) {
            /*  Checamos en que estatus quedo la respuesta de la peticion
                Listado de respuestas HTTP    
                https://developer.mozilla.org/es/docs/Web/HTTP/Status
            */
            if (xhttp.status === 200) {
                // Convertimos la respuesta de texto a JSON para poder iterar
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}