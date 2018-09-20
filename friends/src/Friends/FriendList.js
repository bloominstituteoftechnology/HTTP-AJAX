import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: [],
			name: '',
			age: '',
			email: '',
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((response) => {
				this.setState(() => ({ friends: response.data }));
			})
			.catch((error) => {
				console.error('Server Error', error);
			});
	}

	handleChange = (event) => {
		this.setState({ name: event.target.value });
	};
	render() {
		return (
			<div className="friend-list">
				{this.state.friends.map((friend) => (
					<Link to={`/friends/${friend.id}`} key={friend.id}>
						<FriendCard key={friend.id} friend={friend} />
					</Link>
				))}
			</div>
		);
	}
}
