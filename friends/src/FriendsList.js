import React, { Component } from 'react';

class FriendsList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.friends.data);
		if (!this.props.friends.data) {
			return <div>Loading friend information...</div>;
		}
		return (
			<div>
				{this.props.friends.data.map((friend) => (
					<div>
						<div>{friend.name}</div>
						<div>{friend.age}</div>
						<div>{friend.email}</div>
					</div>
				))}
			</div>
		);
	}
}

export default FriendsList;
