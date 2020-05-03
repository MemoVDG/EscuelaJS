import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
	<BrowserRouter>
		{/* Encapsulamos las rutas */}
		{/* Le indicamos que la ruta tiene que ser exactamente ese nombre */}
		<Layout>
			{/* ENCAPSULAMOS el switch en layout con el objetivo de tener el Header y footer en cada pantalla */}
			<Switch>
				{/* Con switch garantizamos que hace render solo del hijo del primer match de la ruta 
			si en route se hace match con mas de un hijo lo que hace es que renderiza uno componente
			despues de otro
		*/}
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/login' component={Login}></Route>
				<Route exact path='/register' component={Register}></Route>
				{/* Especificamos el component a renderizar cuando no hay una ruta establecida */}
				<Route component={NotFound}></Route>
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;
