import React from 'react';

const HolaMundo = () => {
	const Hello = 'Hola Mundo';
	const isTrue = true;
	return (
		<div className='holaMundo'>
			<h1>{Hello} </h1>
			<h2>Curso Escencial de React</h2>
			<img src='https://i.picsum.photos/id/450/200/300.jpg' alt='React' />
			{isTrue ? <h4>True1</h4> : <h5>False</h5>}
			{/* Solo se muestra cuando la condicion es verdadera en contrario no pasa nada */}
			{isTrue && <h4>True2</h4>}
		</div>
	);
};

export default HolaMundo;
