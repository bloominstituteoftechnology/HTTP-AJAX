import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return (
		<div>
			{props.friends.map(f => <Friend key={f.id} friend={f}/>)}
		</div>
	);
};

export default FriendsList;