import React from 'react';
import '../assets/components/Header.scss';

const Header = () => (
	<header className='header'>
		<img src='./logo.png' className='header__img' />
		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src='./profile.png' alt='profile' />
				<p>Perfil</p>
			</div>
			<ul>
				<li>
					<a href='/'>Cuenta</a>
				</li>
				<li>
					<a href='/'>Cerrar Sesión</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
