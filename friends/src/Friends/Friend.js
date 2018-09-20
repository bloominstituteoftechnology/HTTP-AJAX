import React, { Component } from 'react';
import axios from 'axios';
import FriendCard from './FriendCard';

export default class Friend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: null,
		};
	}

	componentDidMount() {
		const {
			match: { params },
		} = this.props;

		this.fetchFriend(param.id);
	}

	fetchFriend = (id) => {
		axios
			.get(`http://localhost:5000/friends/${id}`)
			.then((response) => {
				this.setState(() => ({ friend: response.data }));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		if (!this.state.movie) {
			return <div>Loading friend information...</div>;
		}

		return (
			<div>
				<FriendCard friend={this.state.friend} />
			</div>
		);
	}
}
