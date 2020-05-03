import React from 'react';
import '../assets/styles/components/login.scss';

const Register = () => (
	<section className='login'>
		<section className='login__container'>
			<h2>Registrate</h2>
			<form action='' className='login__container--form'>
				<input className='input' type='text' placeholder='Nombre' />
				<input className='input' type='email' placeholder='Correo' />
				<input className='input' type='password' placeholder='Contraseña' />
				<button className='button'>Registrate</button>
			</form>
			<a className='login__container--sesion' href='/'>
				Iniciar Sesión
			</a>
		</section>
	</section>
);

export default Register;
