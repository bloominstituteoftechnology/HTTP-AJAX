import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

	newFriend = () => {
		this.props.history.push('/newfriend');
	};

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
				<button onClick={this.newFriend}>Add new friend</button>
			</div>
		);
	}
}

export default FriendsList;
