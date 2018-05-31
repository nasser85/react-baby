import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';

export default class App extends Component {
	render() {
		const content = "Welcome to your React-Baby-Generated boilerplate!"
		return (
			<div className="baby-app-wrapper">
				<div className="baby-app">
					<h2 className="baby-app-title">React Baby</h2>
					<p className="baby-app-content">{content}</p>
				</div>
			</div>
		)
	}
}