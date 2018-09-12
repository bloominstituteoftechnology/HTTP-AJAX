// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import FriendsList from './components/FriendsList';
import PostFriend from './components/PostFriend';
import MainPage from './components/MainPage';
import ViewFriend from './components/ViewFriend';

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

	handlePost = e => {
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
	} // handlePost()

	handlePut = id => e => {
		e.preventDefault();

		const updatedFriend = {
			name: e.target.friendName.value,
			age: Number(e.target.friendAge.value),
			email: e.target.friendEmail.value
		};

		axios
			.put(`http://localhost:5000/friends/${id}`, updatedFriend)
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err));
	} // handlePut()

	handleDelete = id => e => {
		e.preventDefault();

		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then(res => this.fetchData(res.data))
			.catch(err => console.log(err));
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
				<Route path = '/postfriend' render = { props => <PostFriend {...props} handlePost = { this.handlePost } />} />
				<Route exact path = '/friendslist' render = { props => <FriendsList {...props} friends = { this.state.friends } />} />
				<Route path = '/friendslist/:id' render = { props => <ViewFriend {...props} friends = { this.state.friends } handlePut = { this.handlePut } handleDelete = { this.handleDelete } /> } />
			</div>
		);
	}
}

export default App;
