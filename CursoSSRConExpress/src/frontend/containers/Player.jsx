import React, { useEffect } from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';

const Player = (props) => {
	// props.match.params obtiene el ID de la URL de react-router
	const { id } = props.match.params;
	const hasPlaying = Object.keys(props.playing).length > 0;

	useEffect(() => {
		props.getVideoSource(id);
	}, []);

	return hasPlaying ? (
		<div className='player'>
			<video controls autoplay>
				<source src={props.playing.source} type='video/mp4' />
			</video>
			<div className='Player-back'>
				<button type='button' onClick={() => props.history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	) : (
		<h1>Loading</h1>
	);
};

const mapStateToProps = (state) => {
	return {
		playing: state.playing,
	};
};

const mapDispatchToProps = {
	getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
