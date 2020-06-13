import React, { Component } from 'react';

class TechList extends Component {
	state = {
		techs: [
			'Nodejs',
			'Reactjs',
			'Angular'
		]
	};

	render() {
		return (
			<ul>
				<li>NodeJs</li>
				<li>ReactJs</li>
				<li>Angular 8</li>
			</ul>
		);
	}
}

export default TechList;