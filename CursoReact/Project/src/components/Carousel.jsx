import React from 'react';
import '../assets/components/Carousel.scss';

const Carousel = ({ children }) => (
	<section className='carousel'>
		<div className='carousel__cointaier'>{children}</div>
	</section>
);

export default Carousel;
