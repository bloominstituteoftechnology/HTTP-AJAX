import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}
	componentDidMount() {
		axios
			.get(`http://localhost:5000/friends`)
			.then((response) => {
				this.setState({ friends: response });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	updateFriends() {}

	render() {
		return (
			<div className="App">
				<FriendsList friends={this.state.friends} />
        <FriendsForm />
			</div>
		);
	}
}

export default App;
