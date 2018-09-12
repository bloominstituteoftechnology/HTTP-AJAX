import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	newFriend = event => {
		event.preventDefault();
		axios
			.post('http://localhost:5000/friends', {
				name: event.target[0].value,
				age: event.target[1].value,
				email: event.target[2].value
			})
			.then(response => {
				this.setState({
					friends: response.data
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(response => {
				this.setState({
					friends: response.data
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="FriendsList">
				{this.state.friends.map(friend => (
					<div key={friend.id}>
						<p>
							Name: <span>{friend.name}</span>
						</p>
						<p>
							Age: <span>{friend.age}</span>
						</p>
						<p>
							Email: <span>{friend.email}</span>
						</p>
						<br />
					</div>
				))}
				<form onSubmit={this.newFriend}>
					Add new friend
					<br />
					<label>
						Name
						<input type="text" name="name" />
					</label>
					<label>
						Age
						<input type="number" name="age" />
					</label>
					<label>
						Email
						<input type="text" name="email" />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default FriendsList;
