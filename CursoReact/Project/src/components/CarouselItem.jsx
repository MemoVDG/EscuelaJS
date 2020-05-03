import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
	<div className='carousel-item'>
		<img className='carousel-item__img' src={cover} alt={title} />
		<div className='carousel-item__details'>
			<div>
				<img
					src='https://img.icons8.com/android/24/000000/play.png'
					alt='play-icon'
					className='carousel-item__details--img'
				/>
				<img
					src='https://img.icons8.com/cute-clipart/24/000000/plus-math.png'
					alt='plus-icon'
					className='carousel-item__details--img'
				/>
			</div>
			<p className='carousel-item__details--title'>{title} </p>
			<p className='carousel-item__details--subtitle'>
				{`${year} ${contentRating} ${duration}`}
			</p>
		</div>
	</div>
);

/* Agregamos los proptype que es donde indicamos que recibimos en el component 
	y de que tipo es lo que recibimos
*/
CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};
export default CarouselItem;
