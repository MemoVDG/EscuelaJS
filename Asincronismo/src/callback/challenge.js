let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest
    /*  Abrimos la conexion 
        Tipo de request, URL, Si se maneja de manera asincrona
    */
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

fetchData(API, function (error1, data1) {
    if (error1) {
        return console.log(error1);
    } else {
        /*  Anidamos los llamados a la API, solo cambiamos la URL de destino
            concatenando valores
        */
        fetchData(API + data1.results[0].id, function (error2, data2) {
            if (error2) {
                return console.log(error2);
            } else {
                fetchData(data2.origin.url, function (error3, data3) {
                    if (error3) {
                        return console.log(error3);
                    } else {
                        console.log(data1.info.count);
                        console.log(data2.name);
                        console.log(data3.dimension);
                    }
                })
            }
        });
    }
});