import React, { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
	// Destructuracion de datos, de las props que vienen tomamos las variables que ocupamos
	state = {
		count: 0,
	};

	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>Manzanas: {count} </h1>
				<button type='button' onClick={this.handleClick}>
					Click
				</button>
			</div>
		);
	}
}

export default Button;
