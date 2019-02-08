import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';
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
	postFriend = (friend) => {
		axios
			.post('http://localhost:5000/friends', friend)
			.then((response) => {
				console.log('post response', response);
				this.setState({ friends: response.data });
			})
			.catch((err) => console.error('post error:', err));
	};
	updateFriend = (friend, id) => {
		axios
			.put(`http://localhost:5000/friends/${id}`, friend)
			.then((response) => {
				console.log('put response', response.data);
				this.setState({ friends: response.data });
			})
			.catch((err) => console.error('put/update error:', err));
	};
	deleteFriend = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((response) => {
				console.log('delete response', response.data);
				this.setState({ friends: response.data });
			})
			.catch((err) => console.error('delete error:', err));
	};
	changeFriendHandler = (e) => {
		this.setState({
			friendInfo: {
				...this.state.friendInfo,
				[e.target.name]: e.target.value
			}
		});
	};
	render() {
		return (
			<div className="App">
				<h2>Hello This Is Dummy Data</h2>
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendList
							{...props}
							deleteFriend={this.deleteFriend}
							updateFriend={this.updatefriend}
							friends={this.state.friends}
						/>
					)}
				/>
				<FriendForm postFriend={this.postFriend} />
			</div>
		);
	}
}

export default App;
