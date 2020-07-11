import React from 'react';
import ReactDOM from 'react-dom';
// En lugar de mandar el contenedor principal directamente
// exponemos nuestro manejador de rutas y el se encarga de despachar los elements
import App from './routes/App';

//Integracion de redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';

// SSR
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
//import initialState from './intialState';

const history = createBrowserHistory();

const preloadeState = window.__PRELOADED_STATE__;

//Variable para conectar la extension de REDUX con la app y poder hacer debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Creacion del store que recibe un reducer que viene de la carpeta reducer/index.js
 y el estado inicial de la app  */
const store = createStore(reducer, preloadeState, composeEnhancers());

// Lo cargamos y una vez que se ocupa se elimina para que
// los usuarios desde consola de JS no puedan modificar el estado
delete window.__PRELOADED_STATE__;

// Hydrate nos sirve cuando hacemos SSR
// y con el se esuchan los eventos de la aplicacion
ReactDOM.hydrate(
	/* Proporcionamos el estado inicial al provider y el reducer que hara los cambios
    y regresara los cambios
  */
	<Provider store={store}>
		<Router history={history}>
			{/* Envolvemos la app en el provider de react-redux  */}
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
