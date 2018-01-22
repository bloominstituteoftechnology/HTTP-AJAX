import React from 'react';


function FriendList(props) {
	return (
		<div>
			<div className="friend-title">Lambda Friends</div>
			<ul className="friend-grid">
				{props.friends.map((friend) => {
					return (
						<li key={friend.id} className="friend">
							<div className="friend-name">{friend.name}</div>
							<div className="friend-age">{`Age: ${friend.age}`}</div>
							<div className="friend-email">{`Email: ${friend.email}`}</div>
							<button
								onClick={() => {
									props.delete(friend.id);
								}}
							>
							Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FriendList;
