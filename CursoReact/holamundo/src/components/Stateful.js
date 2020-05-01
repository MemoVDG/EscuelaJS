import React, { Component } from 'react';

class Stateful extends Component {
	constructor(props) {
		super(props);
		// El estado del component
		this.state = {
			hello: 'Hola Mundo',
		};
	}
	render() {
		return <h1>{this.state.hello} </h1>;
	}
}

export default Stateful;
