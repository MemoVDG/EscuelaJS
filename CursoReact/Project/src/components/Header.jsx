import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/profile.png';

const Header = () => (
	<header className='header'>
		{/* Agregamos LINK para poder ir a home al dar a la imagen, es parecido al
			tag a pero Link evita que se recarge la pagina y solo se mueva al component
			asi como visualmente se ve mas fluido
		*/}
		<Link to='/'>
			<img src={logo} className='header__img' />
		</Link>
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
					<Link to='/login'>Iniciar Sesión</Link>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
