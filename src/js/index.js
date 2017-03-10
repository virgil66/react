import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import About from './components/About';

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) *5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const  input = parseFloat(temperature);
	if(Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			temperature: '',
			scale: 'c'
		}
	}
	handleCelsiusChange(temperature) {
		this.setState({
			scale: 'c',
			temperature
		})
	}
	handleFahrenheitChange(temperature) {
		this.setState({
			scale: 'f',
			temperature
		})
	}
	render() {
		const temperature = this.state.temperature;
		const scale = this.state.scale;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<div>
				<Home scale='c' temperature={ celsius } onTemperatureChange={this.handleCelsiusChange.bind(this)} />
				<Home scale='f' temperature={ fahrenheit } onTemperatureChange={this.handleFahrenheitChange.bind(this)} />
			</div>
		);
	}
}


ReactDOM.render(
	<Index />,
	document.getElementById('app')
);




