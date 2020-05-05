import React, { useState } from 'react';
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

const Login = (props) => {
	const [form, setValues] = useState({
		email: '',
	});

	const handleInput = (event) => {
		setValues({
			...form,
			//  Asignamos valores de forma dinamica segun el campo que se este modificando
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		/* Prevenimos que los datos del form sean mandados por url, el cual es el
		comportamiento por defecto de html */
		event.preventDefault();

		// Ocupamos nuestro ACTION de REDUX
		props.loginRequest(form);
		// Redireccionamos al usuario hacia la pagina principal
		props.history.push('/');
	};
	return (
		<section className='login'>
			<section className='login__container'>
				<h2>Inicia Sesión</h2>
				<form
					action=''
					className='login__container--form'
					onSubmit={handleSubmit}
				>
					<input
						className='input'
						type='text'
						placeholder='Correo'
						name='email'
						onChange={handleInput}
					/>
					<input
						className='input'
						type='password'
						placeholder='Contraseña'
						name='password'
						onChange={handleInput}
					/>
					<button className='button'>Iniciar sesión</button>
					<div className='login__container--remember-me'>
						<input type='checkbox' id='cbox1' value='check' /> Recuerdame
						<a href='/'>Olvide mi contraseña</a>
					</div>
				</form>
				<section className='login__container--social-media'>
					<div>
						<img
							src='https://img.icons8.com/material/24/000000/google.png'
							alt='google-icon'
						/>
						Inicia Sesión con Google
					</div>
					<div>
						<img
							alt='twwiter-icon'
							src='https://img.icons8.com/android/24/000000/twitter.png'
						/>
						Inicia Sesión con Twiiter
					</div>
				</section>
				<p className='login__container--register'>
					No tienes ninguna cuenta
					<Link to='/register'>Registrate</Link>
				</p>
			</section>
		</section>
	);
};
const mapDispatchToProps = {
	loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
