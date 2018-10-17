import React from 'react';

const FriendsContainer = (props) => {
	return (
		<div className="friends-wrapper">
			<h1>List of friends</h1>
			{props.friends.map((friend) => {
				return (
					<div className="friend-container" key={friend.id}>
						<h4>Name: {friend.name}</h4>
						<p>Age: {friend.age}</p>
						<p>Email: {friend.email}</p>
						<button className="update" onClick={props.updateInfo}>
							Update
						</button>
						<button className="delete" onClick={props.deleteFriend}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default FriendsContainer;
