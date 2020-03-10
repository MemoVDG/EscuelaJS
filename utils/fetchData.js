let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest
        /*  Abrimos la conexion 
            Tipo de request, URL, Si se maneja de manera asincrona
        */
        xhttp.open('GET', url_api, true)
        xhttp.onreadystatechange = ( () => {
            /*  Verificamos en que estado esta
                Pagina para checar listado de estados:
                https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            */
            if (xhttp.readyState === 4) {
                /*  Checamos en que estatus quedo la respuesta de la peticion
                    Listado de respuestas HTTP    
                    https://developer.mozilla.org/es/docs/Web/HTTP/Status
                */
                (xhttp.status === 200) ? 
                    // Convertimos la respuesta de texto a JSON para poder iterar
                    resolve(JSON.parse(xhttp.responseText))
                    :
                    reject(new Error('Error', url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;