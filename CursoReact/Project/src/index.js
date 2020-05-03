import React from 'react';
import ReactDOM from 'react-dom';
// En lugar de mandar el contenedor principal directamente
// exponemos nuestro manejador de rutas y el se encarga de despachar los elements
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));
