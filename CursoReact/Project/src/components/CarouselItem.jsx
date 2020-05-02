import React from 'react';
import '../assets/components/CarouselItem.scss';
const CarouselItem = () => (
	<div className='carousel-item'>
		<img
			className='carousel-item__img'
			src='https://images.pexels.com/photos/3214972/pexels-photo-3214972.jpeg?cs=srgb&dl=arte-arquitectura-antiguo-piedra-3214972.jpg&fm=jpg'
			alt='place'
		/>
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
		</div>
		<p className='carousel-item__details--title'>Descriptive title</p>
		<p className='carousel-item__details--subtitle'>Information data</p>
	</div>
);

export default CarouselItem;
