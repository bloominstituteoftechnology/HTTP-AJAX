// React
import React, { Component } from 'react';

// Components
import FriendsList from './components/FriendsList';

// Dependencies
import axios from 'axios';

// Styles
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			friends: []
		};
	}

	fetchData = (res) => {
		this.setState({
			friends: res
		});
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<FriendsList friends = { this.state.friends } />
			</div>
		);
	}
}

export default App;
