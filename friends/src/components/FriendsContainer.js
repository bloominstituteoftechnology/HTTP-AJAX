import React from 'react';

const FriendsContainer = (props) => {
	return (
		<div className="friends-wrapper">
			{props.friends.map((friend) => {
				return (
					<div className="friend-container" key={friend.id}>
						<h4>{friend.name}</h4>
						<p>{friend.age}</p>
						<p>{friend.email}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FriendsContainer;
