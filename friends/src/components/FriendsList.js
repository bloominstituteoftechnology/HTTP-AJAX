import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
	console.log(props)
	return (
		<div>
		 {props.friends.map(f => (
		 	<Friend key={f.id} f={f} />
	   ))}
		</div>
	)
}

export default FriendsList;