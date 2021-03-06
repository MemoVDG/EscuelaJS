import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
	const inputStyle = classNames('input', {
		isHome,
	});
	return (
		<section className='main'>
			<h2 className='main__title'>¿Que quieres ver hoy?</h2>
			<input type='text' placeholder='Buscar...' className={inputStyle} />
		</section>
	);
};
export default Search;
