// React
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Components
import FriendsList from './components/FriendsList';
import PostFriend from './components/PostFriend';
import MainPage from './components/MainPage';

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
				<Route exact path = '/' render = { props => <MainPage {...props} friends = { this.state.friends } /> } />
				<Route path = '/postfriend' render = { props => <PostFriend {...props} handleSubmit = { this.handleSubmit } />} />
				<Route path = '/friendslist' render = { props => <FriendsList {...props} friends = { this.state.friends } />} />
			</div>
		);
	}
}

export default App;
