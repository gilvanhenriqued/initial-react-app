import React, { Component } from 'react';

class TechList extends Component {
	state = {
		newTech: '',
		techs: [
			'Nodejs',
			'Reactjs',
			'Angular'
		]
	};

	handleInputChange = e => {
		this.setState({ newTech: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();

		this.setState({ 
			techs: [...this.state.techs, this.state.newTech],
			newTech: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<ul>
					{this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
				</ul>
				<input 
					type="text" 
					onChange={this.handleInputChange}
					value={this.state.newTech}	
				/>
			</form>
		);
	}
}

export default TechList;