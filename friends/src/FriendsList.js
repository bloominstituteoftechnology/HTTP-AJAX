import React, { Component } from 'react';
import FriendsCard from './FriendsCard';

class FriendsList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.friends.data) {
			return <div>Loading friend information...</div>;
		}
		return (
			<div>
				{this.props.friends.data.map((friend) => (
					<FriendsCard friend={friend} onClick={() => this.props.getFriendId()} />
				))}
			</div>
		);
	}
}

export default FriendsList;
