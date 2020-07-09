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
import {createBrowserHistory} from 'history';
import {Router} from 'react-router';
import initialState from './intialState';


const history = createBrowserHistory();

//Variable para conectar la extension de REDUX con la app y poder hacer debug
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Creacion del store que recibe un reducer que viene de la carpeta reducer/index.js
 y el estado inicial de la app  */
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
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
