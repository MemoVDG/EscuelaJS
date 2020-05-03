import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
// Conectamos con redux
import { connect } from 'react-redux';
import { setFavorite, removeFavorite } from '../actions';

const CarouselItem = (props) => {
	const { id, cover, title, year, contentRating, duration, isList } = props;

	const handleSetFavorite = () => {
		props.setFavorite({
			id,
			cover,
			title,
			year,
			contentRating,
			duration,
		});
	};

	const handleRemoveFavorite = (itemId) => {
		props.removeFavorite(itemId);
	};
	return (
		<div className='carousel-item'>
			<img className='carousel-item__img' src={cover} alt={title} />
			<div className='carousel-item__details'>
				<div>
					<img
						src='https://img.icons8.com/android/24/000000/play.png'
						alt='play-icon'
						className='carousel-item__details--img'
					/>

					{isList ? (
						<img
							src='https://img.icons8.com/cute-clipart/64/000000/delete-forever.png'
							alt='remove-icon'
							className='carousel-item__details--img'
							onClick={() => handleRemoveFavorite(id)}
						/>
					) : (
						<img
							src='https://img.icons8.com/cute-clipart/24/000000/plus-math.png'
							alt='plus-icon'
							className='carousel-item__details--img'
							onClick={handleSetFavorite}
						/>
					)}
				</div>
				<p className='carousel-item__details--title'>{title} </p>
				<p className='carousel-item__details--subtitle'>
					{`${year} ${contentRating} ${duration}`}
				</p>
			</div>
		</div>
	);
};

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

const mapDispatchToProps = {
	setFavorite,
	removeFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
