import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/profile.png';

const Header = () => (
	<header className='header'>
		<img src={logo} className='header__img' />
		<div className='header__menu'>
			<div className='header__menu--profile'>
				<img src={userIcon} alt='profile' />
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
