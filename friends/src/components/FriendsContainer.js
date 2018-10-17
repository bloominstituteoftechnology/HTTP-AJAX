import React from 'react';

const FriendsContainer = (props) => {
	return (
		<div className="friends-wrapper">
			<h1>List of friends</h1>
			{props.friends.map((friend) => {
				const year = new Date().getFullYear();
				return (
					<div className="friend-container" key={friend.email}>
						<h4>Name: {friend.name}</h4>
						<p>Age: {friend.age}</p>
						<p>Email: {friend.email}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FriendsContainer;
