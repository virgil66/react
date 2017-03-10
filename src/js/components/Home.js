import React from 'react';

const scaleName = {
	c: "Celsius",
	f: "Fahrenheit"
};



export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			temperature: ''
		}
	}
	handleChange(event) {
		// this.setState({
		// 	temperature: event.target.value
		// })
		this.props.onTemperatureChange(event.target.value);
	}
	render() {
		// const temperature = this.state.temperature;
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
			<div>
				// <h1>Home</h1>
				<fieldset>
					<legend>Enter temperature in {scaleName[scale]}: </legend>
					<input value={ temperature } onChange={ this.handleChange.bind(this) } />
				</fieldset>
			</div>
		);
	}
}