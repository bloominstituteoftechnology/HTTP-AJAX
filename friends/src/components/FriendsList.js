import React from 'react';
import Friends from './Friends';
import './FriendsList.css';

const FriendsList = (props) => {
	return (
		<div className="friendBody">
			<h1 className="heading">My Friends List:</h1>
			{props.friends.map((x) => {
				return (
					<div className="friend">
						<Friends friend={x} />
					</div>
				)
			})}
		</div>
	)
}

export default FriendsList;