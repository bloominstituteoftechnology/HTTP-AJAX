// React
import React, { Component } from 'react';

// Components
import FriendsList from './components/FriendsList';
import PostFriend from './components/PostFriend';

// Dependencies
import axios from 'axios';

// Styles
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			friends: []
		};
	}

	fetchData = res => {
		this.setState({
			friends: res
		});
	}

	handleSubmit = e => {
		e.preventDefault();

		const newFriend = {
			name: e.target.friendName.value,
			age: Number(e.target.friendAge.value),
			email: e.target.friendEmail.value
		};

		axios
			.post('http://localhost:5000/friends', newFriend)
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err))
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
				<PostFriend handleSubmit = { this.handleSubmit } />
				<FriendsList friends = { this.state.friends } />
			</div>
		);
	}
}

export default App;
