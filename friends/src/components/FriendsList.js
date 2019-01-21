import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
	const { friends } = props;

	if (friends < 1) return <h2>Loading...</h2>;
		else {

		return (
			<div>
				{friends.map(f => <Friend key={f.id} friend={f}/>)}
			</div>
		);
	}
};

export default FriendsList;