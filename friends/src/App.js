import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}
	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((response) => {
				console.log('response:', response);
				this.setState({ friends: response.data });
			})
			.catch((err) => console.log('error:', err));
	}

	render() {
		return <div className="App" />;
	}
}

export default App;
