import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			friends: [],
			errorMessage: '',
		};
	}

	loadFriends = () => {
		const endpoint = 'http://localhost:5000/friends';

		axios
			.get(endpoint)
			.then((response) => {
				this.setState(() => ({ friends: response.data }));
			})
			.catch(error => {
				this.setState({ errorMessage: "Something went wrong" });
			});
	};

	deleteFriend = (id) => {
			const endpoint = `http://localhost:5000/friends/${id}`;

			axios
				.delete(endpoint)
				.then((response) => {
					this.loadFriends();
				})
				.catch(error => {
					this.setState({ errorMessage: "Failed to delete friend" });
				});
	};

	componentDidMount() {
		this.loadFriends();
	}

	render () {
		return (
			<div className="App">
				<FriendForm refresh={this.loadFriends} />
				<FriendList friends={this.state.friends} delete={this.deleteFriend} />
			</div>
		);
	}
}

export default App;
