import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

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
				{/* <form action={this.newFriend} /> */}
			</div>
		);
	}
}

export default FriendsList;
