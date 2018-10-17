import React, { Component } from 'react';
import './App.css';
import FriendsContainer from './components/FriendsContainer';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: {},
			newFriends: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setState({ friends: res.data }))
			.catch((err) => console.log(err));
	}

	render() {
		console.log(this.state.friends);
		return (
			<div className="App">
				<FriendsContainer friends={this.state.friends} />
			</div>
		);
	}
}

export default App;
