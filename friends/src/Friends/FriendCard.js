import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = (props) => {
	return (
		<div className="friend-card">
			<Link to={`/friends/${props.friend.id}`}>
				<h2>{props.friend.name}</h2>
			</Link>
			<div className="friend-age">
				Age: <em>{props.friend.age}</em>
			</div>
			<div className="friend-email">
				Email: <strong>{props.friend.email}</strong>
			</div>
		</div>
	);
};

export default FriendCard;
