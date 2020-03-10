const somethingWillHappen = () => {
    // Estructura de la creacion de la promesa
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey');
        } else {
            reject('Whoops');
        }
    });
}

// Ejecutar la promesa 
somethingWillHappen()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whhoops');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then( resolve => {
        console.log('Hola');
    })
    .catch(err => {
        console.error(err);
    })

// Ejecutar varias promesas, si alguna de las promesas falla, todo falla
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then( response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    })